<script>
  export let data;
</script>

<div class="fixed top-0 left-0 blur-[80px]">
  <div class="w-20 h-20 bg-sky-700 mt-[120%] mx-[50%]">1</div>
  <div class="w-20 h-20 bg-sky-700 mt-[80%] mx-[300%] ">2</div>
  <div class="w-20 h-20 bg-sky-700 absolute mt-[270%] mx-[40%]">3</div>
</div>


<section class="p-10 fixed z-20 top-0 left-0">
<h1 class="font-bold text-2xl mb-3">Daftar Materi.</h1>
<ul>
  {#each data.posts as post}
    <li class="px-5 py-3 border my-6 rounded-xl text-slate-700 shadow">
      <a href={post.path}>{post.meta.title}</a>
    </li>
  {/each}
</ul>
</section>