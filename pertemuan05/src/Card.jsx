function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-purple-500 to-blue-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        Kartu Tanda Penduduk
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="nama"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Tempat/Tgl lahir"
                            >
                                Tempat/Tgl lahir
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Tempat/Tgl lahir"
                                id="Tempat/Tgl lahir"
                            />
                        </div>

                        <div  class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Jenis Kelamin"
                            >
                                Jenis Kelamin
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Jenis Kelamin"
                                id="Jenis Kelamin"
                            />
                        </div>

                        <div  class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Alamat"
                            >
                                Alamat
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Alamat"
                                id="Alamat"  
                            />  
                        </div> 

                      <div  class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Agama"
                            >
                                Agama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Agama"
                                id="Agama"  
                            />  
                        </div>   

                        <div  class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Status Perkawinan"
                            >
                                Status Perkawina
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Status Perkawinan"
                                id="Status Perkawinan"  
                            />  
                        </div> 

                        <div  class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Pekerjaan"
                            >
                                Pekerjaan
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Pekerjaan"
                                id="Pekerjaan"  
                            />  
                        </div>   

                      <div  class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Kewarganegaraan"
                            >
                                Kewarganegaraan
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Kewarganegaraan"
                                id="Kewarganegaraan"  
                            />  
                        </div>    

                        <div  class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Berlaku Hingga"
                            >
                                Berlaku Hingga
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Berlaku Hingga"
                                id="Berlaku Hingga"  
                            />  
                        </div>            
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
                </div>
        </>
    );
}

export default Card;