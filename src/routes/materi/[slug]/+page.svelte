<script>
  export let data;
  const Content = data.content; // komponen markdown
</script>

<div class="relative ">
  <div class="w-20 h-20 bg-sky-800 absolute mt-[30%] mx-[10%] blur-[80px]"></div>
  <div class="w-20 h-20 bg-sky-800 absolute mt-[110%] mx-[65%] blur-[80px]"></div>
  <div class="w-20 h-20 bg-sky-800 absolute mt-[220%] mx-[40%] blur-[80px]"></div>
</div>

<div>
<div class="w-screen text-base flex items-center justify-around px-4 py-2 bg-slate-50 shadow fixed">
  <p class="font-bold text-sky-600">PMR SMAKDA</p>
  <div class="text-sm">
    <h1>{data.meta.title}</h1>
    <small class="opacity-40">{data.meta.date}</small>
  </div>
</div>
<article class="py-4 px-4 prose pt-24">
    <a class="my-5 ml-4 block" href="/materi">🔙 kembali</a>
   <Content /> <!-- render isi markdown -->
</article>

</div>