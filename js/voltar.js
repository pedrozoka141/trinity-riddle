async function gerarHash(texto) {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto.toLowerCase().trim());
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function voltarJogo() {
    const input = document.getElementById('inputResposta').value.trim().toLowerCase();

    if (input === "") {
        alert("Por favor, digite uma resposta!");
        return;
    }

    const hashTentativa = await gerarHash(input);

    const fases = {
        "e199c259c72e86f2cf04d404803447dc7eb37ecc3feb79945ea6c46c0ac08c15": "by1hc3Nhc3Npbm8uaHRtbA==", // 01
        "6639bbf4300a00ec7124941b371b3de5f7d38128f719424ee1506550ae9dbfd2": "Y2FzYS5odG1s", // 02
        "98b50a7eb10cdcb5e62053a09b3ada597943ac66c7b573e42461b98fe05f430e": "YXF1aWxvLXF1ZS1zZS1wZXJkZXUuaHRtbA==", // 03
        "fd7275bbea343cb9700fc158597fe6737d8a15b7b31b94a9545fc59eb5899ab1": "V0EtREMuaHRtbA==", // 04
        "b77cd51d0a8f833c63d4a44ddebda35bedb2d348b7a75b03d6c4432716300cc5": "ZmlsbWUuaHRtbA==", // 05
        "e14c9927c8235fce2e5d08b23eb8fd9d1b2c703c0338fc9b674bbfc633458802": "ZGlhcmlvLmh0bWw=", // 06
        "4aad5a7e7b58ee08ac9646a0ff375edcdafb0d9dcb72af7ff82d76519cbabb87": "YmFieS5odG1s", // 07
        "16a2dd3a872593902a1e39276f1800bdb42614ff16caa364938e35ed8d8326a9": "aW52ZXJ0YS5odG1s", // 08
        "1d5a04fbeace6278ac78229ccac4064ede1f7c62ce18b6989e72a52ff99c9259": "ZXNwYWNvLmh0bWw", // 09   
        "538d7d9fe78e7baac47a9fbd6f2c68845ecca72dbdc2b47b4c5a0f5620ab8e93": "aGVsYWRlLmh0bWw=", // 10
        "31edb26fe93d2b781230e6d3aba757c5049d2fbcf388c29565cab911ef0098f0": "ZnJlcXVlbmNpYS5odG1s", // 11
        "0b97d878aae572c71685cd7a2df47958b5ee7069c95c022da82d8fb0dd99f1b3": "cHJpbWVpcmFjYXJ0YS5odG1s", // 12
        "1367a84fc8304db903653a95a9b071bfc0607bb93d837cc562877555e6ea17ed": "bGF0aW0uaHRtbA==", // 13
        "5c93647c63f0dc50222c39dacc09d3775c5058203fdb4eb43f1f8b36c41279c2": "aG9tZW0tcmluZG8uaHRtbA==", // 14
        "0a2c0cff9c19a1f3a0edc6d86510cd7bbc7de676c8dc29523866eb52582e2cc0": "bmVyZHRoaW5ncy5odG1s", // 15
        "d4d38dd62b7af86a945668d8bfc7e12a38442edc7cf87a1facd689d5e2a2b4a3": "S0QuaHRtbA==", // 16
        "763a87e8ecd542b4690f0eb87ee2f7b2955ba3db89bda3350167e589b38653fe": "eGVub2ZvbnRlLmh0bWw=", // 17
        "412b0d878f7cc81d8a61d5b45669baf3712591f1785a321f0501da4151a0192b": "YWxmYS1iZXRhLmh0bWw", // 18
        "8323e170e90cfe7486abbd05d7153d6673bfd0cb3fe5729794890521b7d1cd5a": "bXVsdGlwbGlxdWUuaHRtbA==", // 19
        "25f63ce0a144f4f4082bc843ab550656d0ad49e83cca0b1792d14df23e4f5ef7": "d2UtYXJlLWZhbWlseS5odG1s", // 20
        "b2471d941bf888366cf43813752ea2ebfef08254773cf116187cdd6d0463a50a": "QjE2Lmh0bWw=", // 21
        "80e3a910d4729ff4403d63f2c16c75421df0c79bf5b66c55fa0c4727044d5cc5": "Y29vcmRlbmFkYXMuaHRtbA==", // 22
        "d404af5aeddd2e4db32c8e62d9818510fdddd3c2fd7d5e4b992efc3122637821": "YmYuaHRtbA==", // 23
        "46459f9bd8c39ba752f095a190cd30f8043f52ab0afe90850c50510c3ef9929d": "ZnV0Lmh0bWw=", // 24
        "b1818f1e7c30cb0913483ff546ae67f3226c0e2cfe7e842a09722c52e39f014a": "cXVlc3RyYS5odG1s", // 25
        "5e7554cbcd53df666e9840a7544bb7157a29137a3d7131e0ba0299ff35558254": "Y2FwaXRhbC5odG1s", // 26
        "49faaade493be8b6b6164ee67f7e4d101812a5dda970d6ca693dda8b8cf82e4b": "Y29kaWdvc2RlcG9udG9zLmh0bWw=", // 27
        "143c9bf9f003535dbfb1af5f23e367790e7639a220bfbc95a1e5a44e05acbb10": "dHVkb2VtaW5nbGVzLmh0bWw=", // 28
        "856c2c3817a5ff42e5baa32aa12bb4ca9d3ea72c1924d2afd06050ac3028104d": "ZmFzZTMwLmh0bWw=", // 29
    };

    if (fases[hashTentativa]) {
        window.location.href = atob(fases[hashTentativa]);
    } else {
        alert("Resposta incorreta ou fase não encontrada!");
    }
}

document.getElementById('inputResposta').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        voltarJogo();
    }
});
