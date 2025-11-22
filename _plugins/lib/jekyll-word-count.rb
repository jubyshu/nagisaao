require "jekyll"
require "digest"

module Jekyll
  module WordCountLogic
    def single_word_count(input)
      text = input.to_s
      return 0 if text.strip.empty?

      no_code = text.gsub(/<pre\b[^>]*>.*?<\/pre>/im, "")
      no_code = no_code.gsub(/<code\b[^>]*>.*?<\/code>/im, "")

      plain_text = no_code.gsub(/<[^>]*>/, "")

      plain_text.scan(/[\u4e00-\u9fa5]|[a-zA-Z0-9_\-]+/).size
    end
  end

  module WordCountFilter
    include WordCountLogic

    def single_word_count(input)
      super(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::WordCountFilter)

module Jekyll
  class TotalWordCountGenerator < Generator
    include WordCountLogic
    priority :low

    def generate(site)
      cache = Jekyll::Cache.new(self.class.name)

      total_count = 0

      site.posts.docs.each do |post|
        key = "wc_" + Digest::SHA1.hexdigest(post.id + post.content)

        count = cache.getset(key) do
          single_word_count(post.content)
        end

        total_count += count
      end

      site.data["total_word_count"] = total_count
    end
  end
end
