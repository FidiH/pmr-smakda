<script>
  export let data;
</script>

<div class="relative ">
  <div class="w-20 h-20 bg-sky-800 absolute mt-[30%] mx-[10%] blur-[80px]"></div>
  <div class="w-20 h-20 bg-sky-800 absolute mt-[110%] mx-[65%] blur-[80px]"></div>
  <div class="w-20 h-20 bg-sky-800 absolute mt-[220%] mx-[40%] blur-[80px]"></div>
</div>

<section class="p-10">
<h1 class="font-bold text-2xl mb-3">Daftar Materi.</h1>
<ul>
  {#each data.posts as post}
    <li class="px-5 py-3 border my-6 rounded-xl text-slate-700 shadow">
      <a href={post.path}>{post.meta.title}</a>
    </li>
  {/each}
</ul>
</section>