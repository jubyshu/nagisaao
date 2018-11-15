import pygal
from pygal.style import Style

cs = Style(
	background='transparent',
	label_font_size=10,
	title_font_size=12,
	colors=('#0096a0',),
	font_family='googlefont:PT Serif',
	tooltip_font_size=10,
	)
	

rc = pygal.Radar(fill=True, style=cs, show_legend=False)
rc.title = 'Philosophical Character'
# rc.x_labels = ['Absurdism', 'Aestheticism', 'Epicureanism', 'Pacifist',
# 'Marxism', 'Altruism', 'Egalitarianism', 'Emotionalism']
rc.x_labels = ['Absurdism', 'Aestheticism', 'Epicureanism']
rc.add('Juby', [100, 50, 25])
# rc.add('LY', [0, 0, 0, 100, 50, 25, 0, 0])
# rc.add('TT', [0, 0, 0, 25, 100, 0, 50, 0])
# rc.add('YJ', [0, 0, 25, 100, 0, 0, 0, 75])
rc.render_to_file('phil_test.svg')