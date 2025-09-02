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
    <li class="mt-6">
      <a href={post.path} class="flex items-center">
        <span class="p-2 inline-block mr-2 rounded-xl border-slate-400
        shadow-xl text-2xl">{post.meta.icon}</span>
        <span class="p-2">{post.meta.title}</span>
      </a>
    </li>
  {/each}
</ul>
</section>