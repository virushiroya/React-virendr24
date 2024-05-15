import React from 'react';

const CardWithImageExample = () => {
    return (

        <div class="h-screen relative flex justify-center items-center">

            <section class="container px-6 mx-auto py-20 absolute z-50">
                <div class="flex flex-col">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <div class="flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded"> */}
                                                    <button class="flex items-center gap-x-2">
                                                        <span>Invoice</span>

                                                        {/* <img class="h-3" src="../accet/2353161.png" alt=""> */}
                                                    </button>
                                                </div>
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Id
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Name
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                Email
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                Phone
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                Website
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                Companyname
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "></th>

                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded">             <span>#3066</span> */}
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">1</td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
                                                    {/* <img class="w-3 h-3" src="../accet/icons8-24.png" alt=""> */}

                                                    <h2 class="text-sm font-normal">Paid</h2>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <div class="flex items-center gap-x-2">
                                                    {/* <img class="object-cover w-8 h-8 rounded-full" src="../accet/1.avif" alt=""> */}
                                                    <div>
                                                        <h2 class="text-sm font-medium text-gray-800">Arthur Melo</h2>
                                                        <p class="text-xs font-normal text-gray-600">authurmelo@example.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Monthly subscription</td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="flex items-center gap-x-6">
                                                    <button class="text-gray-500">
                                                        Archive
                                                    </button>

                                                    <button class="text-blue-500">
                                                        Download
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded"> */}

                                                    <span>#3065</span>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">2</td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100">
                                                    {/* <img class="w-3 h-3" src="../accet/icons8-cross-48.png" alt=""> */}

                                                    <h2 class="text-sm font-normal">Cancelled</h2>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <div class="flex items-center gap-x-2">
                                                    {/* <img class="object-cover w-8 h-8 rounded-full" src="../accet/2.avif" alt=""> */}
                                                    <div>
                                                        <h2 class="text-sm font-medium text-gray-800">Andi Lane</h2>
                                                        <p class="text-xs font-normal text-gray-600">andi@example.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Monthly subscription</td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="flex items-center gap-x-6">
                                                    <button class="text-gray-500">
                                                        Archive
                                                    </button>

                                                    <button class="text-blue-500">
                                                        Download
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded"> */}

                                                    <span>#3064</span>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">3</td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100">
                                                    {/* <img class="w-3 h-3" src="../accet/icons8-24.png" alt=""> */}

                                                    <h2 class="text-sm font-normal">Paid</h2>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <div class="flex items-center gap-x-2">
                                                    {/* <img class="object-cover w-8 h-8 rounded-full" src="../accet/3.avif" alt=""> */}
                                                    <div>
                                                        <h2 class="text-sm font-medium text-gray-800">Kate Morrison</h2>
                                                        <p class="text-xs font-normal text-gray-600">kate@example.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Monthly subscription</td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="flex items-center gap-x-6">
                                                    <button class="text-gray-500">
                                                        Archive
                                                    </button>

                                                    <button class="text-blue-500">
                                                        Download
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded"> */}

                                                    <span>#3063</span>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">4</td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100">
                                                    {/* <img class="w-3 h-3" src="../accet/icons8-24.png" alt=""> */}

                                                    <h2 class="text-sm font-normal">Paid</h2>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <div class="flex items-center gap-x-2">
                                                    {/* <img class="object-cover w-8 h-8 rounded-full" src="../accet/4.avif" alt=""> */}
                                                    <div>
                                                        <h2 class="text-sm font-medium text-gray-800">Candice Wu</h2>
                                                        <p class="text-xs font-normal text-gray-600">candice@example.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Monthly subscription</td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="flex items-center gap-x-6">
                                                    <button class="text-gray-500">
                                                        Archive
                                                    </button>

                                                    <button class="text-blue-500">
                                                        Download
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center gap-x-3">
                                                    {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded"> */}

                                                    <span>#3062</span>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">5</td>
                                            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100">
                                                    {/* <img class="w-3 h-3" src="../accet/icons8-24.png" alt=""> */}

                                                    <h2 class="text-sm font-normal">Refunded</h2>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <div class="flex items-center gap-x-2">
                                                    {/* <img class="object-cover w-8 h-8 rounded-full" src="../accet/5.avif" alt=""> */}
                                                    <div>
                                                        <h2 class="text-sm font-medium text-gray-800">Orlando Diggs</h2>
                                                        <p class="text-xs font-normal text-gray-600">orlando@example.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Monthly subscription</td>
                                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                <div class="flex items-center gap-x-6">
                                                    <button class="text-gray-500">
                                                        Archive
                                                    </button>

                                                    <button class="text-blue-500">
                                                        Download
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-6">
                    <a href="" class="flex items-center px-5 py-2 text-sm text-gray-700 bg-white border rounded-md">
                        {/* <img class="w-5 h-5" src="../accet/icons8-left-arrow-50.png" alt=""> */}

                        <span class="ml-3">
                            Previous
                        </span>
                    </a>

                    <div class="items-center hidden md:flex gap-x-3">
                        <a href="" class="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100">1</a>
                        <a href="" class="px-2 py-1 text-sm text-gray-500 rounded-md">2</a>
                        <a href="" class="px-2 py-1 text-sm text-gray-500 rounded-md">3</a>
                        <a href="" class="px-2 py-1 text-sm text-gray-500 rounded-md">...</a>
                        <a href="" class="px-2 py-1 text-sm text-gray-500 rounded-md">12</a>
                        <a href="" class="px-2 py-1 text-sm text-gray-500 rounded-md">13</a>
                        <a href="" class="px-2 py-1 text-sm text-gray-500 rounded-md">14</a>
                    </div>

                    <a href="" class="flex items-center px-5 py-2 text-sm text-gray-700 bg-white border rounded-md">
                        <span>
                            Next
                        </span>

                        {/* <img class="w-5 h-5 ml-3" src="../accet/icons8-right-arrow-50.png" alt=""> */}
                    </a>
                </div>
            </section>

        </div>

    )
}

export default CardWithImageExample