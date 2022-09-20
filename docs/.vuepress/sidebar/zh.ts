import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
	"/posts/": [
		{
		  text: "苹果",
		  icon: "note",
		  prefix: "apple/",
		  collapsable: true,
		  children: ["1","2","3","4"],
		},
		{
		  text: "香蕉",
		  icon: "note",
		  prefix: "banana/",
		  collapsable: true,
		  children: ["1","2","3","4"],
		},
		"cherry",
		"dragonfruit",
		"strawberry",
		"tomato",
  ],
});
