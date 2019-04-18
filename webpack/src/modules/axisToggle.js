import * as d3 from "d3";



export default function renderAxisToggle(data, state, dispatch) {

	const dom = d3.select("#axis")
		.append("div")
		.attr("class", "axis-toggle")
		.append("input")
		.attr("type", "checkbox")
		.attr("id", "axis-toggle")
		.attr("checked",()=>{
			if (state.axisToggle===1){
				return "checked";
			}
		})
		.on("change", function () {
			dispatch.call("change:axis",null,data, this.checked)
		}
	)
	
}