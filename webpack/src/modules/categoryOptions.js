import * as d3 from "d3";
import {getReligionList, getCategoryList} from "../data";
import {makeKey, unmakeKey} from "../util";



export default function renderCategoryOptions(data, state, dispatch) {

	const categories = getCategoryList(data);
	
	const dom = d3.select("#legend")
		.append("div")
		.attr("class", "category-options");
		
	const option = dom.selectAll(".option")
		.data(categories);
		
	const optionEnter = option.enter()
		.append("div")
		.attr("class", "option");
		
	const widget = optionEnter.append("input")
		.attr("type", "checkbox")
		.attr("id", d => makeKey(d.key))
		.attr("checked", d=>{
			if (state[makeKey(d.key)]===1){
				return "checked";
			}
		})
		.attr("class", d => `option-${makeKey(d.key)}`)
		.on("change", function () {
			dispatch.call("change:category",null,data, d3.select(this).attr("id"))
		});
		
	const label = optionEnter.append("label")
		.attr("for", d => makeKey(d.key))
		.text(d => d.key);
		
}