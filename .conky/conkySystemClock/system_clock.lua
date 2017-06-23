-- this is a lua script for use in conky
require 'cairo'

function conky_main()
	if conky_window == nil then return end
	local cs = cairo_xlib_surface_create(conky_window.display, conky_window.drawable, conky_window.visual, conky_window.width, conky_window.height)
	cr = cairo_create(cs)
	local updates = tonumber(conky_parse('${updates}'))
	if updates == 4 then
		-- colors and font
		base_rgba = {0, 0, 0, 1}
		accent_rgba = {1, 1, 1, 1}
		cairo_select_font_face(cr, "Terminus", CAIRO_FONT_SLANT_NORMAL, CAIRO_FONT_WEIGHT_NORMAL)
		cairo_set_font_size(cr, 12)
		-- settings
		center_x = 1600
		center_y = 300
		radius = 80
		circle_width = 30
		line_length = 50
		line_width = 7
		description_offset = 3
		description_line_length = 20
		description_line_width = 1
		cpu_text_line_length = 29
		cpu_table_length = 1000
		cpu_table = {}
		minutes_length = 50
		minutes_width = 2
		hours_length = 30
		hours_width = 2
	end
	if updates > 5 then
		-- edit from here --------------------------------------------------
		-- new lines are added with draw_line(text, text_line_length, value, max_value, degree)
		-- for example draw_line("Memory", 48, tonumber(conky_parse("$mem")), tonumber(conky_parse("$memmax")), 90) for a memory bar at 90 degrees




		-- to here ---------------------------------------------------------
		-- base, cpu and clock
		draw_base()
		draw_cpu_graph()
		draw_clock()
	end
	cairo_destroy(cr)
	cairo_surface_destroy(cs)
	cr = nil
end -- end main function

function draw_base()
	cairo_set_source_rgba(cr, base_rgba[1], base_rgba[2], base_rgba[3], base_rgba[4])
	-- draw main ring
	cairo_set_line_cap(cr, CAIRO_LINE_CAP_ROUND)
	cairo_set_line_width(cr, circle_width)
	cairo_arc(cr, center_x, center_y, radius, 0, 2 * math.pi)
	cairo_stroke(cr)
	cairo_set_line_width(cr, description_line_width)
	draw_line_in_circle(radius + (circle_width / 2), line_length + description_line_length, description_line_width, 0)
	cairo_move_to(cr, center_x, center_y - (radius + (circle_width / 2) + line_length + description_line_length))
	cairo_line_to(cr, center_x + cpu_text_line_length, center_y - (radius + (circle_width / 2) + line_length + description_line_length))
	cairo_stroke(cr)
	cairo_move_to(cr, center_x + description_offset, center_y - (radius + (circle_width / 2) + line_length + description_line_length) - description_offset)
	cairo_show_text(cr, "CPU")
	cairo_stroke(cr)
end

function draw_line(text, text_line_length, value, max_value, degree)
	x_position = 1
	if degree > 180 then
		x_position = -1
	end
	if value == nil then
		value = 0
	end
	if max_value == nil then
		max_value = 100
	end
	cairo_set_source_rgba(cr, base_rgba[1], base_rgba[2], base_rgba[3], base_rgba[4])
	cairo_set_line_cap(cr, CAIRO_LINE_CAP_BUTT)
	draw_line_in_circle(radius + (circle_width / 2), line_length, line_width, degree)
	cairo_set_line_cap(cr, CAIRO_LINE_CAP_ROUND)
	cairo_set_line_width(cr, description_line_width)
	draw_line_in_circle(line_length + radius + (circle_width / 2), description_line_length, description_line_width, degree)
	cairo_move_to(cr, center_x + (0 + ((line_length + radius + (circle_width / 2) + description_line_length) * math.sin((math.pi / 180) * degree))), center_y + (0 - ((line_length + radius + (circle_width / 2) + description_line_length) * math.cos((math.pi / 180) * degree))))
	cairo_line_to(cr, center_x + ((0 + ((line_length + radius + (circle_width / 2) + description_line_length) * math.sin((math.pi / 180) * degree))) + (x_position * text_line_length)), center_y + (0 - ((line_length + radius + (circle_width / 2) + description_line_length) * math.cos((math.pi / 180) * degree))))
	cairo_stroke(cr)
	cairo_move_to(cr, center_x + ((0 + ((line_length + radius + (circle_width / 2) + description_line_length) * math.sin((math.pi / 180) * degree))) + (text_line_length * ((x_position - 1) / 2)) + description_offset), (center_y + (0 - ((line_length + radius + (circle_width / 2) + description_line_length) * math.cos((math.pi / 180) * degree)))) - description_offset)
	cairo_show_text(cr, text)
	cairo_stroke(cr)
	cairo_set_source_rgba(cr, accent_rgba[1], accent_rgba[2], accent_rgba[3], accent_rgba[4])
	cairo_set_line_cap(cr, CAIRO_LINE_CAP_BUTT)
	draw_line_in_circle(radius + (circle_width / 2), ((line_length - 1) / max_value) * value, line_width - 2, degree)
end

function draw_cpu_graph()
	cairo_set_source_rgba(cr, accent_rgba[1], accent_rgba[2], accent_rgba[3], accent_rgba[4])
	calculate_cpu_table()
	for i = 1, cpu_table_length do
		draw_line_in_circle(radius - (circle_width / 2), (circle_width / 100) * cpu_table[i], 1, (360 / cpu_table_length) * (i - 1))
	end
end

function calculate_cpu_table()
	for i = 1, cpu_table_length do
		if cpu_table[i] == nil then
			cpu_table[i] = 0
		end
	end
	for i = cpu_table_length, 2, -1 do
		cpu_table[i] = cpu_table[i - 1]
	end
	cpu_value = tonumber(conky_parse("$cpu"))
	if cpu_value ~= nil then
		cpu_table[1] = cpu_value
	else
		cpu_table[1] = 0
	end
end

function draw_clock()
	cairo_set_source_rgba(cr, accent_rgba[1], accent_rgba[2], accent_rgba[3], accent_rgba[4])
	cairo_set_line_cap(cr, CAIRO_LINE_CAP_ROUND)
	seconds = tonumber(conky_parse("${time %S}"))
	minutes = tonumber(conky_parse("${time %M}"))
	hours = tonumber(conky_parse("${time %I}"))
	draw_line_in_circle(0, minutes_length, minutes_width, ((360 / 60) * minutes) + (360 / (60 * 60) * seconds))
	draw_line_in_circle(0, hours_length, hours_width, ((360 / 12) * hours) + (360 / (12 * 60) * minutes))
end

function draw_line_in_circle(offset, length, width, degree)
	cairo_set_line_width(cr, width)
	point = (math.pi / 180) * degree
	start_x = 0 + (offset * math.sin(point))
	start_y = 0 - (offset * math.cos(point))
	end_x = 0 + ((offset + length) * math.sin(point))
	end_y = 0 - ((offset + length) * math.cos(point))
	cairo_move_to(cr, start_x + center_x, start_y + center_y)
	cairo_line_to(cr, end_x + center_x, end_y + center_y)
	cairo_stroke(cr)
end
