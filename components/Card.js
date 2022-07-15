

export default function Card({name}) {
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{name}</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}