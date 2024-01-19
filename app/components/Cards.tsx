import Image from 'next/image'

const Cards = () => {
    return (
        <div>
            <div className="cards_container m-4 p-3 border-2 border-fuchsia-400 rounded-xl">
                <div>
                    <Image className='rounded-lg'
                src='https://images.tokopedia.net/img/KRMmCm/2022/10/7/8c53a432-2e09-482c-b3c3-877a63dd588b.jpg'
                alt='gambar ayam'
                width={75}
                height={75}
                    />
                    <p className='price'>Rp. 10.000</p>           
                </div>
                <div>
                    <Image
                        src=''
                        alt=''
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
     
    )
}
export default Cards