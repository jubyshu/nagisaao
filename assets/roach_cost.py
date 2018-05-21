# -*- coding: utf-8 -*-
import pygal
from pygal.style import Style

custom_style = Style(
	background='transparent',
	# plot_background='transparent',
	legend_font_size=10,
	label_font_size=10,
	title_font_size=12,
	)
pie_chart = pygal.HorizontalBar(style=custom_style)
pie_chart.title = '萝卜的衣食住行（价格/元）'

pie_chart.add('饲养盒', 24.50)
pie_chart.add('电子温度计', 16.55)
pie_chart.add('D3钙粉', 15.00)
pie_chart.add('树脂水盆食盆', 10.00)
pie_chart.add('造景钙沙', 15.60)
pie_chart.add('椰壳躲避洞', 9.00)
pie_chart.add('7W加热垫+反射膜', 23.00)
pie_chart.add('面包虫', 12.80)
pie_chart.add('胡萝卜', 2.70)
pie_chart.add('矿泉水', 1.00)
pie_chart.add('青菜', 2.40)
pie_chart.add('麦麸', 12.00)
pie_chart.add('复合维生素', 14.90)

pie_chart.render_to_file('roach_cost.svg')
