// src/routes/api/daftar/+server.js
import { json } from "@sveltejs/kit";

// ambil env
import { PRIVATE_GAS_URL } from "$env/static/private";

export async function POST({ request }) {
    const body = await request.json();

    // validasi dasar
    if (!body.nama || body.nama.trim().length < 3) {
        return json(
            { status: "error", message: "Nama minimal 3 huruf" },
            { status: 400 }
        );
    }

    if (!body.ttl || body.ttl.trim().length < 7) {
        return json(
            {
                status: "error",
                message: "Tempat tanggal lahir di isi yang benar"
            },
            { status: 400 }
        );
    }

    if (!body.noHp || !/^[0-9]{10,15}$/.test(body.noHp)) {
        return json(
            { status: "error", message: "Nomor HP tidak valid" },
            { status: 400 }
        );
    }

    if (!body.kelas) {
        return json(
            { status: "error", message: "Kelas wajib diisi" },
            { status: 400 }
        );
    }

    if (!body.alamat) {
        return json(
            { status: "error", message: "Alamat wajib diisi" },
            { status: 400 }
        );
    }

    if (!body.jurusan) {
        return json(
            { status: "error", message: "Jurusan wajib dipilih" },
            { status: 400 }
        );
    }

    if (!body.jenis_kelamin) {
        return json(
            { status: "error", message: "Jenis kelamin wajib diisi" },
            { status: 400 }
        );
    }

    if (!body.motivasi || body.motivasi.trim().length < 10) {
        return json(
            { status: "error", message: "Motivasi minimal 10 karakter" },
            { status: 400 }
        );
    }

    if (!body.persetujuan) {
        return json(
            { status: "error", message: "Persetujuan wajib dicentang" },
            { status: 400 }
        );
    }

    // forward ke Google Apps Script
    const res = await fetch(PRIVATE_GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    const data = await res.json();
    return json(data);
}
