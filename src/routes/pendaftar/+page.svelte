<script>
  import { onMount } from "svelte";
  let pendaftar = [];

  onMount(async () => {
  const res = await fetch("/api/pendaftar");
  pendaftar = await res.json();
  });
</script>

<h2 class="text-2xl font-bold my-7 sticky py-5 px-4 top-0 bg-slate-50">Daftar Pendaftar</h2>


{#each pendaftar as p, i}
<section class="m-4 p-4 rounded-lg bg-slate-100 ring-1 ring-slate-500 shadow-lg flex justify-between">
  <div class="overflow-scroll">
    <h2 class="text-2xl font-semibold">{p.nama}</h2>
    <p class="text-xs">{p.ttl}</p>
    <p>
      {p.kelas} • {p.jurusan}
    </p>
    <p>{p.alamat}</p>
    <p class="text-sm">
      <span>{p.motivasi}</span>
    </p>
  </div>
  <!--####$-->
  <div>
    <p>
      {p.status}
    </p>
  </div>
</section>
{/each}
