Gem::Specification.new do |spec|
  spec.name          = "jekyll-word-count"
  spec.version       = "0.1.0"
  spec.authors       = ["Juby"]
  spec.email         = ["juby@jubeny.com"]
  spec.summary       = "Jekyll plugin to count words in posts and site"
  spec.description   = "Provides a Liquid filter and total site word count generator"
  spec.homepage      = "https://github.com/jubyshu/jekyll-word-count"
  spec.license       = "MIT"

  spec.files         = Dir["lib/**/*.rb"]
  spec.require_paths = ["lib"]

  spec.add_dependency "jekyll", ">= 4.0"
end
