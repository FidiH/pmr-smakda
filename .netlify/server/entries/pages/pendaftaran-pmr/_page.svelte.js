import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "select.svelte-axmhfi{field-sizing:content}",
  map: null
};
const styleInput = "border-b-2 mb-7 border-b-slate-700/80 w-full px-2 bg-transparent focus:outline-none focus:border-slate-800 focus:bg-slate-500/10";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textarea;
  $$result.css.add(css);
  return `
<div class="relative"><div class="w-20 h-20 bg-sky-600 absolute mt-[30%] mx-[10%] blur-[80px]"></div>
  <div class="w-20 h-20 bg-sky-600 absolute mt-[110%] mx-[65%] blur-[80px]"></div></div>


<h1 class="pt-7 px-5 text-3xl font-bold">Pendaftaran seleksi ekskul PMR SMAKDA</h1>

<form class="p-5 mt-8 relative">
  <div><input aria-label="Input Nama" name="nama" type="text" placeholder="Nama" required${add_attribute("class", styleInput, 0)}></div>
  
  
  <div><input aria-label="Input No. HP" name="noHp" type="tel" placeholder="No. HP" required${add_attribute("class", styleInput, 0)}></div>
  
  
  <div><input aria-label="Input Kelas" name="kelas" type="text" placeholder="Kelas" required${add_attribute("class", styleInput, 0)}></div>

  
  <div class="flex justify-between items-center mt-5">
    <select aria-label="Dari Jurusan" name="Jurusan" required class="inline-block text-center appearance-none py-2 px-4 rounded-xl bg-sky-600 text-slate-50 font-semibold w-fit focus:outline-none svelte-axmhfi"><option value="">-- Jurusan --</option><option value="TJKT">TJKT</option><option value="AKL">AKL</option><option value="MPLB">MPLB</option></select>

    
    <div class="w-1/2"><p class="font-semibold">Jenis Kelamin
      </p>
      <div class="flex items-center justify-between"><input type="radio" id="pria" name="jenis_kelamin" value="pria" required>
        <label for="pria">Cowok</label>
         |
        <input type="radio" id="wanita" name="jenis_kelamin" value="wanita">
        <label for="wanita">Cewek</label></div></div></div>
  
  
  <label for="motivasi" class="mt-10 mb-2 font-semibold block">Motivasi masuk PMR</label>
  <textarea name="motivasi" id="motivasi" rows="1" placeholder="saya ingin belajar" class="${"resize-none overflow-hidden overflow-y-auto max-h-[15rem] " + escape(styleInput, true)}" required${add_attribute("this", textarea, 0)}>${escape("")}</textarea>
  
  
  <div class="mt-4 flex items-center"><input id="persetujuan" name="persetujuan" type="checkbox" required class="w-5 mr-1 inline-block">
    <label for="persetujuan" class="text-xs text-slate-800/70 font-semibold italic">Dengan mengisi dan melanjutkannya saya setuju untuk mengikuti seleksi pendaftaran ekskul PMR</label></div>
  
  
  <button class="block text-center py-2 px-4 rounded-xl bg-sky-600 text-slate-50 absolute right-5 font-semibold w-fit mt-5" type="submit">Lanjut</button>
</form>`;
});
export {
  Page as default
};
