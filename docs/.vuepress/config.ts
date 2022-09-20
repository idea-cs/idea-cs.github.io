import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",
  
  lang: "zh-CN",
  
  title: "CloudNote",
  
  description: "Atomic_律的云笔记",
	
  theme,

  shouldPrefetch: false,
});
