<script>
  export let data;
  const Content = data.content; // komponen markdown
</script>

<div class="fixed top-0 left-0 blur-[80px]">
  <div class="w-20 h-20 bg-sky-700 mt-[120%] mx-[5%]">1</div>
  <div class="w-20 h-20 bg-sky-700 mt-[80%] mx-[300%] ">2</div>
  <div class="w-20 h-20 bg-sky-700 absolute mt-[270%] mx-[40%]">3</div>
</div>

<div class="absolute z-20">
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