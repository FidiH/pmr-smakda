<script>
import Pernyataan from "$lib/components/pernyataan.svelte"

  const styleInput = "border-b-2 border-b-slate-700/80 w-full px-2 bg-transparent focus:outline-none focus:border-slate-800 focus:bg-slate-500/10 peer"
  const style_teksContoh = "text-[0px] transition-all peer-focus:text-base text-slate-700/50"

  // auto resize textarea
  let value = ""
  let textarea
  function autoResize(){
  textarea.style.height = "auto"
  textarea.style.height = textarea.scrollHeight + "px"
  }

  // jalankan form
  let loading = false;
  let message = null; // pesan sukses/gagal
  async function submitForm(event) {
  event.preventDefault();
  if (loading) return; // cegah double click

  loading = true;
  message = null;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
  const res = await fetch("/api/daftar", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
  });

  const result = await res.json();

  if (result.status === "ok") {
  message = { type: "success", text: "✅ Pendaftaran berhasil disimpan!" };
  event.target.reset();
  value = "";
  } else {
  message = { type: "error", text: "❌ " + (result.message || "Gagal menyimpan data") };
  }
  } catch (err) {
  message = { type: "error", text: "⚠️ Terjadi kesalahan server" };
  }

  loading = false;
  }

</script>

<!--hiasan-->
<div class="relative ">
  <div class="w-20 h-20 bg-sky-600 absolute mt-[30%] mx-[10%] blur-[80px]"></div>
  <div class="w-20 h-20 bg-sky-600 absolute mt-[110%] mx-[65%] blur-[80px]"></div>
  <div class="w-20 h-20 bg-sky-600 absolute mt-[220%] mx-[40%] blur-[80px]"></div>
</div>

<!-- Pesan notifikasi -->
{#if message}
<div
  class="mt-3 mx-5 p-3 rounded-lg text-sm fixed bottom-[7%] left-[7%] z-50 font-semibold shadow-md
  {message.type === 'success' ? 'bg-green-100 text-green-700': 'bg-red-100 text-red-700'}"
  >
  {message.text}
</div>
{/if }

<h1 class="pt-7 px-5 text-3xl font-bold">Pendaftaran ekskul PMR SMAKDA</h1>

<form class="p-5 mt-8 relative" on:submit={submitForm}>

  <!--input nama-->
  <div class="mb-5">
    <input aria-label="Input Nama" name="nama" type="text" placeholder="Nama" required class={styleInput}>
    <div class={style_teksContoh}>
      contoh: Sabdo Pangestu
    </div>
  </div>
  
  <!--input tempat tanggal lahir-->
  <div class="mb-5">
    <input aria-label="Input tanggal lahir" name="ttl" type="text" placeholder="Tempat Tanggal Lahir" required class={styleInput}>
    <div class={style_teksContoh}>
      contoh: Cilacap, 1 Januari 2007
    </div>
  </div>

  <!--input No. HP-->
  <div class="mb-5">
    <input aria-label="Input No. HP" name="noHp" type="tel" placeholder="No. HP" required class={styleInput}>
        <div class={style_teksContoh}>
      contoh: 083116293051
    </div>
  </div>
  
  <!--input Alamat-->
  <div class="mb-5">
    <input aria-label="Input alamat" name="alamat" type="text" placeholder="Alamat" required class={styleInput}>
        <div class={style_teksContoh}>
      contoh: Cilacap, Kec. Kedungreja, Des. Kedungreja RT6/RW9
    </div>
  </div>

  <!--input kelas-->
  <div class="mb-5">
    <input aria-label="Input Kelas" name="kelas" type="text" placeholder="Kelas" required class={styleInput}>
        <div class={style_teksContoh}>
      contoh: 11 TJKT 2
    </div>
  </div>

  <!--box jurusan dan jenis kelamin-->
  <div class="flex justify-between items-center mt-5 ">
    <!--jurusan-->
    <select aria-label="Dari Jurusan" name="jurusan" required class="inline-block text-center appearance-none py-2 px-4 rounded-xl bg-sky-600 text-slate-50 font-semibold w-fit focus:outline-none">
      <option value="">-- Jurusan --</option>
      <option value="TJKT">TJKT</option>
      <option value="AKL">AKL</option>
      <option value="MPLB">MPLB</option>
    </select>

    <!--jenis kelamin-->
    <div class="w-1/2">
      <p class="font-semibold">
        Jenis Kelamin
      </p>
      <div class="flex items-center justify-between">
        <input type="radio" id="pria" name="jenis_kelamin" value="pria" required>
        <label for="pria">Cowok</label>
        <!--####--> |
        <input type="radio" id="wanita" name="jenis_kelamin" value="wanita">
        <label for="wanita">Cewek</label>
      </div>
    </div>
  </div>

  <!--textarea-->
  <label for="motivasi" class="mt-10 mb-2 font-semibold block">Motivasi masuk PMR</label>
  <textarea bind:this={textarea} bind:value={value} on:input={autoResize} name="motivasi" id="motivasi" rows="1" placeholder="saya ingin belajar" class="resize-none overflow-hidden  overflow-y-auto max-h-[15rem] {styleInput}" required></textarea>

  <!--persetujuan-->
  <Pernyataan></Pernyataan>
  <div class="mt-4 flex items-center">
    <input id="persetujuan" name="persetujuan" value="menyetujui" type="checkbox" required class="w-5 mr-1 inline-block">
    <label for="persetujuan" class="text-xs text-slate-800/70 font-semibold italic">Saya telah membaca pernyataan diatas dan setuju untuk mengikuti kegiatan ekskul PMR</label>
  </div>

  <!-- tombol kirim -->
  <button class="block text-center py-2 px-4 rounded-xl bg-sky-600 text-slate-50 absolute right-5 font-semibold w-fit mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
    type="submit"
    disabled={loading}>
    {#if loading}
    <span class="animate-pulse">Mengirim...</span>
    {:else }
    Lanjut
    {/if }
  </button>

</form>

<div class="h-10"></div>

<style>
  select{
  field-sizing: content;
  }
</style>