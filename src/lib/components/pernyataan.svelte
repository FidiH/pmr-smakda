<script>
  let show = true
</script>


<section class="my-5">

  <h3 class="font-semibold cursor-pointer" >Baca Pernyataan</h3>
  <button class="px-4 py-2 bg-sky-600 text-slate-50 font-semibold rounded-lg my-3" type="button" on:click={() => show = !show}>{show ? "Baca >" : "Tutup"}</button>

  <div class="transition-all {show ? 'text-[0px] opacity-0': 'text-base opacity-100'}">
    <p>
      Bahwa selama menjadi anggota palang merah remaja (PMR) yaitu:
    </p>
    <ul class="list-disc px-7">
      <li>akan mengikuti kegiatan ekstrakurikuler pmr dengan tekun dan penuh semangat</li>
      <li>akan menjaga nama baik sendiri, keluarga, sekolah, dan extra pmr</li>
      <li>wajib hadir setiap extra pmr yaitu hari....</li>
      <li>sanggup mematuhi peraturan-peraturan yang sudah ditentukan oleh extra pmr</li>

      <li>apabila saya tidak mematuhi peraturan-peraturan yang sudah ditentukan oleh extra pmr maka saya sanggup menerima sangsi, yaitu:</li>
      <ul class="list-disc px-7">
        <li>Peringatan
        </li><li>Tindak tegas</li>
        <li>Teguran</li>
      </ul>
    </ul>
    <p class="mt-2">
      Demikian pernyataan ini saya buat dengan sebenar benarnya dan penuh dengan tanggung jawab tidak ada paksaan dari pihak manapun serta sudah disetujui oleh orang tua/wali dan berlaku sejak ditanda tanganinya surat pernyataan ini.
    </p>
  </div>

</section>