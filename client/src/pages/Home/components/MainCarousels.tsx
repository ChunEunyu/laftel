import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MainCarousels = () => {
    return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={customStyle}
      >
        {data.map((item, index) => (
          <SwiperSlide>
            <img className='relative max-sm:h-[500px] max-sm:object-cover' src={item.web_img} alt={`Slide ${index + 1}`} />
            <div className='absolute bottom-20 left-10 max-lg:left-5 max-lg:bottom-3 max-sm:bottom-1'>
              <img className='static max-lg:size-1/4 size-2/4 max-sm:size-1/2' src={item.logo_img} />
              <div className='static max-lg:text-xs text-white font-semibold text-xl pt-3'>{item.content}</div>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    );
}

interface CustomCSSProperties extends React.CSSProperties {
  '--swiper-pagination-color'?: string;
  '--swiper-navigation-color'?: string;
}

const customStyle: CustomCSSProperties = {
  '--swiper-pagination-color': '#fff',
  '--swiper-navigation-color': '#fff',
};

type Props = {
    id: number;
    web_img: string;
    mobile_img: string;
    logo_img: string;
    content: string;
    label: string;
    button_text: string;
    is_adult: boolean;
    item_destination: number | null;
    event_destination: string | null;
    theme_destination: string | number | null;
    external_destination: string | null;
}
  
const data: Props[] = [
    {
      "id": 5038,
      "web_img": "https://image.laftel.net/carousel/75d93bbf-1cd3-426a-beb2-969234039dbc.jpg?Expires=1719892631&Signature=GLJRCHD1tkisnR70aJu8R24jn3YDc0wJh3p9yykDp9cfb-aiN6gdRoFj16iDffU9vf3zSvkWpDXPkyRTTq5qnGjdskImDiuDn3uOVJvXaheU~D2MkoG7ZS~WSj6nYpxh0kDLQtuNZXluzo9ISa31Lj5yBQOuy1hiAm~T~kc8bHLcPYZCjGT4XF3l5cB4zMqM0LnxmMDpdImIEat2Lix8GyqQdrOCNhjz3HAQbLegjjuQbRey2xjbktOAUko1Q-0gwf8z1FazArbtx~bqwgHRiqSnit0mhxyR6SphgW8TsrgC~ad7lbtBAr7DYYQb7F~ieqRmLYWG6b2-dvb-4djPGA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/8d3901e5-a7e8-4c58-9721-879fc258f185.jpg?Expires=1719892631&Signature=j9Szo6bDxG-ZwrZ7DZYfK53hisJsV85VG1C01G7MhoNeB1a3uq4hPSFS4LgqfbzUkj6RIXhenADycYEg5AxWVcJ3MZiItuHwZPGr-bF2FJqxMc2rvZgn4ZrUyzhnWyYeMo0NIOgMrXs-FgglIzTUTnDAxzWuaq9UgMZEpkv4yPzj5-ghqaLcZTklwOEo7soNQUTFOo65fcNTdbIZfwaSDOJeE8UKNpFk0vBbo8cN3O8KLxNAao01mnRKxbRhQofcS0qd4FhATI9tgulK4jI9ekCuclcCbDKdI8wNLCd0~gnHR4LSvim8AJXf-MSxxeD590T7QbnPh8i45ebt2~jckw__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/208969c4-bc33-4735-ac70-ccde13cfb29c.png?Expires=1719892631&Signature=eH~203H2mypQfiWA7BAnuAd97At4wopdEvn7CV6dZwlwECi-awHr5a~xH0YKf6kYJniRwWgUxswzqU5yaTbYm9HJ1-Gd3DCg214ASUIWRMOW-yglhgmtSQA0KIxJqd4Pgjj2bft~zPmHfkADoDonMV9~zVf9RXd33Tms2VbvNcJHmXX1ESXzlxlv1474JhPYnyVrj5gm0KmW3mJAFGFUfk7KN8ZPuEfd75lVAvZnPhlbGomPvx6OsG9zu2P4LrME1PxmY1iEUaMY1TZN-OS0e4pbqCODcCGmumhA1g9MAvjVVwb-sMQP0uGa1vDS4tNOeGoR6EuhgpqCrkk7U0Ld3w__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "100명까지 가기 위해 2기 확정!",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 41670,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 5040,
      "web_img": "https://image.laftel.net/carousel/3694856b-3e9b-45bf-a103-3a3659a3e0fb.jpg?Expires=1719892631&Signature=QVHIYdInlwQRItOhOIWmxf-WkNU22c2aFDCqJbswUrtlcfsDp~QLYeNPHOPSJ4NgSlfBsWYFjAH-Ibmvu-kuNnyC~6v-LVcW9DxSjdVUTOI7SHbMHlhyEk2dCC1syfI9eLOzu0VLvCVcw6-Pn9RT0VSSyu1SGrSB5PjRzbs-8jXANfAta2HQPbWbXiFWJNd5N45yrDLgR8xxvM0M-qz0HKHMecAaAVzaIcAeZ6eCM7Xr7U~LRlTRW6xtwqRJdKxit~qoiQQ5KD6kARayJx2ITHK7dsE4K5iT9Nu2QJH~RHkLWugcngR9bOcDGPv8XsnnOXNv-JqKDxr0LWrlyJSJDQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/bc8ad9e4-ab5f-489a-af63-a825987e8ee2.jpg?Expires=1719892631&Signature=HkHbHhlE~QSBOh0pAQMfVbGG~0bU9psi0IPiMLX0fuwV4DVcAflw2lwQFdFPPQ8HPFM1pqa9RvYnyZMUbYA1s3GynPS4fV4qKxjMA945PsJrdahY-GtCc2dCtbMAKl6HWrJnQKbJjJLlN4i3hAy74YtJuVYHzMnbZQqmipZJwoBkmdg4TPqQFP7G~YFh8TSNT9hcrdAnYvW4yU6FcllCxIMR7MVRPmcZ3P7esmgdMPUJWVTITfxnvLKA-ORofcCEZP-a~5SDV6d~VVyETwh7N-yHpb3QNUAeVfQuqH4MFkIZdwF4~-BZLbIn6qB444QGjkDNb5QfgllHeI4Uq~hqSQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/594a561a-6ace-4cbc-b8b9-2cc6cd6c37db.png?Expires=1719892631&Signature=VhnanP08wBKcPqv-7u0dGBbmPQJha1mU6j3J8HSK-o8nHS-EkbrXPEHe~J7Eitx-d9vj7LB1AzDPlRGx0uaE563HaMCwMsT1NmQoEWy-tAclMcjVrmHvJZBDes~sZ8f1S0VhPX0eEPFq5ebuBQGVtbwKZwzNXUe4wK8Q4t9Sv3lE47IbsKsdXHKFCZHYc1fJwrbhQyJkWgTJtEo3bgAd3LyHH1PafXlufvkj~HCvF9MilmLeIQrqSYCRQniH~4NZQMxjdAjmd6IjegVDarEqn-hp3IL7AV3tri1s8jTPeTxtn5t8IqVR5DfjVVC5TA7zDR-ypGEO12aHAM9d0otLAQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "고전 순정의 클래식, 정석, 근본",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 13588,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 4989,
      "web_img": "https://image.laftel.net/carousel/892b0b54-5a0d-4872-82e6-cf418475ca59.jpg?Expires=1719892631&Signature=agYr1COME42gWvK08KzMoWttSW8H~zWCgqdefdsAMcO0ARwiYdxMxEUH7r9jgiInWyAeRW4Y~i8moNZqQiosY5PVUSiDB2TA20CgN3EFVFEkE~ZhN~tfKL5TuJ-LlIIwPCgC1DTydCVjH2YNCkeDvH9JRfT2MitZWx1np0klOzCtqk9SAT8U47Iv9bqN92iQYM9gBfr98uoKTRbLsymMfk~z0rIMyJ0HbRlNmsXqeZpboWiyWq1CSPPAyGu3eftPoybJo9mgss1IJTbfCWJSYf9LIRIJ0855~0yOPU1vTdfXKUkQkQ4COOLPrssX9HTAyJ2BaOZJULKnIq5abYi0Pg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/b553f3b9-d274-49dd-bdf9-db14e0130386.jpg?Expires=1719892631&Signature=fmligKEJu1PwhOsqqWGqp-Xjl5V6WZvQ~atzRXv0rJeUeIn7q899MbiWVu7dgbiitUsS3ur0NCPneDDHd6FtMKrDoTUfAd5dYT4BuelnumzKNU1GZRYunbjyCBvHWOw5waUXNVbchTyETPmL85VY7EH0TN6bYcmAh0SiZ5EWek2suxDZmQKEdfKBFmaIIGirZWX-vnKGLoJACh-b57oiN~jGVa6Rft2Jb5RZwdBOBUpI1SWkUsqBIHW5nzh-Fz0yZ9O~PMPmGzgevA7ehV3wsFO3LMfGXzcnqRrgYMmcDUyJCiHSpjot1MPKxJolvWbm3U74B1n1O62ulX3WRaLq3A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/dbc2fdbb-5b95-4636-8382-258386cc91b8.png?Expires=1719892631&Signature=HtfBn7w0IAFfTYMQwp~HjgmAcj2REsAbqlL8vfpTJ579r07WGEAKPWmWHHuqpiILgytD7ey1uxTtYwcgoDajBm9LkLB7h~OmSc9Xmsc8miQDgnHTWJOpYirJadMucd0WzkRHdcELXWiTkAO7uHasuN3Nsv3KivC2UTpb3EvjcLxNPvE81DB-yVfNMfHkC73X3BT19UGEMGF26d5W-n-X0xPsnD5YVwHJyQClJqxj9ajE5--8t5xmgsD6YBRWCyd6nGsZoNkaHenbhNuwkyQFhZYJaL6paEGJfCLBClQTC9WWU2C4eueBgfOqcSkc2J6y-yB67A8Q-H60xHDE0igD-Q__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "사람의 목숨은 평등하지 않으니까",
      "label": "",
      "button_text": "보러가기",
      "is_adult": true,
      "item_destination": 16107,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 4997,
      "web_img": "https://image.laftel.net/carousel/05041093-6ae8-4a8b-904a-bf226da0567c.jpg?Expires=1719892631&Signature=Zisk3fHrhePqjL8nY-pNQnYSJYE0-Hq1LLfjUbPHs4p8qt2NfZKxWJPK~u~znSpz30ad-tB0u3PuYkak7Blws4jeiYr4f0Yc0mx3726IvPEDkJ99YcEHmqM5du~5moS2iAdOZ2glFA3k7DXJskHa8nWOy9Kk9fa~3eR-2QVEjy7mavEAb0C-8Uke89P2pwRCprmm8yQ8mObMgW1HmUEBhdw99X9qQFYhcKagw03Xqre~CmbSNWvM5wako2Xe3VauKOvsecoaBCnlYTrLyDJGXH5kVdTpZSlZSu3WY8rtvMKhFgkXyqgi~PCjqcKIGXtiojvwxSdVz2cUDgWyc9SIqQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/6e5bfd63-71a6-4c4e-bf9c-e1e54e8c21c1.jpg?Expires=1719892631&Signature=iXidfQJbuNRAALHM5U3N1c~fA3dRjVi5V4V37sgINFmz6ceb4pz8PGojM11rKYLGtO6xb~iZbK3z~CLk5PH6lw~QN4QM8pe-kkI9ci9pKmK-cwhsdXxQug69xnx73RM7ioQc3UOoefIyIRraFDXbGFFlOgeHEABGb0vTki0HhxsZuZfsLgIJgu3D2~EJPBlVQoTgEFfBWNU1QtIMa63D6UOxilKJ~8GeASxpYgGvul1fFaKd6uqRW~Wycb6GSH6RuIWECEXKB8qc1OOyQwz-Bdg5Moco9QOgzO9PQZJdb31lX-FENq-pI0jLB9fyAnN-KKN9Z1aqbAe7fH3kw9llTg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/7beeb02f-e6a2-4049-a924-e274d9ee3f20.png?Expires=1719892631&Signature=dNgEszJLbDjV4tqljUUiyD7H8GSYGh4sf-X3OXf1ZDYpID1qc8nm2nyMH0HfmR2FixFnqIbb3THe-n3vZrvz22Jr~JWNgYvF7K~1Ir4aMemaJ6qd66TPj7Tnfb4r7J0HfxvrAbHzeWEeOxkzJS8mm-z7uh~-Tk~en5~hC4h3IAV2~Dvf3L05khAFvlxCWRFyGKkJi1y5a4T9yGXgf6BMm2LXj-ZOxIJRN0Ywu~JujSyVI9yOvrZoFqHc74Z~-rYUiQAjZJCYYu3hxXZcwMBDK0d1EiE3P7CETrDmZt-ZfVucLrxxP4oG9YTu0fcuTnHk-XwuePmsBS7SdBBwZ0cnGA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "각각의 한 걸음이 다음 곡으로 이어집니다",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 41515,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 5039,
      "web_img": "https://image.laftel.net/carousel/c90fcd7a-a775-4ab7-bc2f-34c51f88f866.jpg?Expires=1719892631&Signature=NXah4jyFPDVTIGDnpAxEtOj-FU9UZnp3FtgzU-jV6tTH8tRfwiwpNpReDzb24zKDtVlEnbX6lAPv4FNN5~nRVYFoTPZ16XMT0onlbyww~zXEUfHLtk8DMjBy71fsvivSyotu6oAvlibaj0v92lnU3x8BBNjJ06m6ziaEkJCNOV05-DizNZQmHayI4dWXKPSywOyXSJbL~34pBvxYWPYLzbgGf12i0RcpZK0dy8M3H5AQpS2En9zNeSpgc76HgzbsY3ouZ7VN~OS~oHG1XowgJqyJ2RbsIf5RosTYnVEhf9O2thKXm-G9prQM-61Qll0yLj4RHiqiVndleumkBGYdcA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/a61a9958-e974-470e-9bdb-702edaa1592a.jpg?Expires=1719892631&Signature=GuOnaSDEH6nbVmarG9a8xNiCtTLyh5ayf9PC5Gh6-Z2oTr56gsJqIVtC1cqAMXDy0tXc78te3J7ZEnhCD9L~KUZVs~tdLI5s2K9F8zofNfbZU752RsT3v5QlpJoUnj~NcVqk3trkAoWnX5xHieGc10WlqEa~VOQhX6g-TqY8XqElkuxmDlo37Bp-0kGADE33Q7faWQ6y~hpzrZO0hl9diyWs5q25-6LzTeSj2AUUDP8bvSmf3jW3Zb30BnauJvZOEAIcmW-sHv4Uj96B4BkEHwKDRcxq3iAgYQxbPtfJq~cPnAcLIkqcR9wyyZOFWzYKkoa5bIIK1ULTMfl1L1IEKw__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/f8ea4f28-e665-4443-8fec-211599594f27.png?Expires=1719892631&Signature=kyG1EnyiKnWZyhy9qYi-zNvzrY1jXSnBfZdpVVi7dzumyruln9hbMG6wrxrLB9K5dJTp54UEzH2yUdbDt6y-6e~scd37K9Hc9zGGCVlZqHIRha-OfAass0ue7ybxWSxOUh-qhq0k-vU5eddGzSAa7tIkRTlYc~gY29JDdZ-WB-7CeMBUyUwhSZZQevipUdJu4MFxBf4oTb85QukwerMUvyDQlcvm-Kaerr4F1pkQQnPid~rFEOp5a6tb1TECIBI-FwB9r10XMiwKM6ioJnf-7XjHcRPf9BPuFeP2HO3QSNZt7B4M~NEClPR4uajn3nVF7-IyLARlKnMJ0GCU0Z0tQQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "결코 죽지 않는 불사의 몸을 가진 인간",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 28772,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 5041,
      "web_img": "https://image.laftel.net/carousel/3afe9acf-414f-47ea-b9e5-fef2a7e245b8.jpg?Expires=1719892631&Signature=CAxeU5RZBMiy4wMyaxaO8si~AfGj8MUNcdOjY3Qh4J37f2a42t-khDARnAhzeX7qqcYNWqcNriwpGJppzvC3um7oUxapBw-qOfl2nF5j06T4Qw-s4c3PEDjubCzDcnPJkT2f-ll0DsQgAsLvQkXzBkAoZ9GqgOR9MfCy1uEmD1-cAkZjaSrkuG8s1wImsf1okdoZJLiUFH6df1q859tq5sphN41K5QfarlaA-4FIIx97wofe559vcUnO~lbSVlH1ufTxqjHmtylRF86lfaCJeSYu9AAQdBIuqWWR7WHJu8uRIlTjDwdoolSv7VIQYdsUgAz7AnBATvY6oMyUSJMDoA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/49fdb454-f1a1-41fb-a786-fbb0b208e0bc.jpg?Expires=1719892631&Signature=LnCv3NYcaeWF6gTOblJ1YNgmxCtxY59Z0q6exXPN5NOSIXsS00nMEpxneGPWn16~jCP4MIM~IXEUlxs7EUWM-VhHmGBPIlif3DH-dHL8AzkAeb0SF7Z6t-3-pwnaymb5Tmy39lfTDZ9sLArCApC8QGuKtguLlc2WChPFYCQ4iWu17CJF5lQTIArds~bcQTm8KHR0FYEInm-ryi24~caVLB0Y0eF7vTwoDvGHMPUysL-gIdtXinXD60CCl10GOyciNz2pEGU0e~-4lcFGbPYg6pAgWk5UgWVadh9dMfoykfTzVF8vbw6alIbzw7QHAZPQdOlVxPsaLOZ38OIic0SJSQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/8958bdff-f144-43c2-a1ba-64e6e0aa6433.png?Expires=1719892631&Signature=Hac6Kgq9F~PdhgYrae4shSJC4w4-dr-w90EL5jRbB~zau7aNyPaN19a6EZAIM6Y03lOiQt~kANseO1kUuK8QVn6estctT9aDTroDppV3tX73Iay8-p~EdOPaizTcCDpPisBL66iaQAmeNZGq8Xi-cm5RO~BK~0AtZu6NCxNx4A5sGYOeUazVs1Iq-nYf0rRV~04uYT0AoQqqeeJVdJ7cRY5u3f5E2PqQcaFDxYAP-tP2py3jVBwPX-L6~YazQUuWoIARZ9iwb0IJ6kkVA5Y5MIls6CeBA~BeNCDGi~huynJtjlvsCWIOQGwlAz2B38NuxzaEYdUJ0TEJAkENXl5iJQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "우리가 기다리던 명작! 드디어 국내 최초 공개!",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 39022,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 5022,
      "web_img": "https://image.laftel.net/carousel/a2f0b3b1-3023-4997-8efd-d3a95600b62a.jpg?Expires=1719892631&Signature=M9B0Bl3EPgEe75nykwYeXY9NmGnDd7~brGRqp7O3vPD~hBCjlqLacLn-~ZwtAD31lNFp0buPlGTUTZyxJaLNRfVWuLuVsR9nHg3JsX1IjU3QbQK9FfIpYujjxk6i9vgZ9ihy8frxEzGOb3Fb9ucXK0QUHKyc4fjcE5YLEAEOngGQIYNFkPCGvjROcHA3Mugr2bWHhz7J22KDyAer2kN~oKkKD89rvDnj2OhuLfGnboBVsw1gkxm7EPvXosD071WaKkC~jhxQsxSqy9VYQL0SY-8e2j3u5Z9rlXKb4kWUeH4z57gHuGKWSEA1HEe~n6dUWyPiMITNjalITeODAFsBSA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/242c0eb4-0a58-41ef-9420-f31fc74c4f9c.jpg?Expires=1719892631&Signature=m4~pDmVVeAOY~zevD8KeQDnWcWJgsKNnoYjTQesR26bTaIjhVsdsNfeSRoOvk5jMYa032eINaVe~4CPHSJA85MQRW49nHf6vvgC7OublnSWKtRGyyq-~OKAOJ0uOUjInhCK996pcHwJv3n8n8MvLMfaIUThV6q13FCM6EkBJfK6nHDGwIAECRzyCKv5zlAmKdviGyYuwW17~fu9mNoucOLE0sS0aUGQwXjynJBnDzf4jU7Mx~6~j-7NuPxxfSllm48pnp~Ywopn1H~sZyNWqOaHh2Vx332JufI2lSBfTV~lcZR~PflLZRR4S6j-xzcTJo9AHyv7lsMRiyjKjIaOgSg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/e420a17c-7c74-41f1-a69d-f29678ed2439.png?Expires=1719892631&Signature=YwvUj~0wiyvKuwFq036xlYqQbsS-XBdcptx~nTiOR5EnVPyQ84EpzE8dehyCcGF4W-QGZ1Nr6Kk3tRowIAlT-erRAOnAC4yVMhvKYa53JODjrvvpUdqbzoTlNAtWYUysl3obA2j~sYWcauHMtYzAkFh~T3E5h-UdvUu5Cap-GBeEn6HMC6t9M1zW9Xvdftuh95Z8RA6MBqa40SHDXB8BLTB14r8xC7RvW~qOLjJdlk9kllTajU1U~0iS5x312cs7GUn736nr0ZglJWxf~-vpfWm8ODHtmZ08X3rHEZrlt1uB8LdOJsobzAJf5iAjchBbMksW-~yf1kXSHp2WkLCL8Q__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "가장 빛나는 별 STELLA 업데이트",
      "label": "",
      "button_text": "바로가기",
      "is_adult": false,
      "item_destination": null,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": "https://www.latale.com/events/fun/2024/update-roadmap/#/?pmx_tag_id=12jKF"
    },
    {
      "id": 5036,
      "web_img": "https://image.laftel.net/carousel/a7f82551-e44e-49c6-a0af-7fe4cccd5449.jpg?Expires=1719892631&Signature=Gemzwgc1gFodqVcitBeGkmj7IgMZa~TlUruwKjJHdEwHtCOB5xoMnMQ07yJ3mWdISqo7R8N2Y3if99OZnb7BWteQhdfxS7kFQWhhf2ScxEDk43j~GcOVd2qci31jh~Z43i1-wXU-HW0BwB-sp3TLFo-Nx-bCxBK3LlnzZ21OVAkgBo4~Es-GQI-Y6DP7-wg3ZUDO9WCL~~NLODbDJUKWdJrEP-IIsVpxex-FT~dRO5-SJXkYJy4QdzKS0JieCxl5SIAG8vHFkRKzpR-mOOfW71jqEKVGUQ2OUqkzE7HQa3I0-Y5k1bkw0js0BPT2uRRmVIByxZCj~pNd~fNKZzRz~A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/33d356ff-d9cc-4031-8033-a79181054ab4.jpg?Expires=1719892631&Signature=nTvbl8GmX-OyyQKsl3-fxOtriI8bwYQxgUjSCNzEx328HBbNJUSGkDCdcUPhW8hhgmHOexgOinmIehgTjFBKo~CpECluPRb8oS1rVOPkCE22tbYgBCF2yAi1LHsB5aVpv7gOFPjVR7GKSXcKpX4IOnENoEHYp~vuYszUPYQHxjxiDMwrG4lw2nxq1XMyMNaxCfveDrcl9ciy9C-HnWHS7uFy0BEnYuHgFs4cJ~JTd03vGUXD-8Vswf27uUXaOqBff2ewl~Kyvg~Api3nknkHVPqhjRxPgoPpPuuoRl~VWy6EM5tiqDsFkhoYiJOU6-QyY0hl-ZxCb3j4s0ym5tLqmQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/4d7cd7c0-fa05-4e77-8a97-9b974c9e394b.png?Expires=1719892631&Signature=eKW1YTd2Qlkc6X3AE0tfrY0KjIBqb8eJq0shwmbjjp5IGcRzFKtGmLADKcuZdU-DR6SlvOwUBBNeY1e9OiOTT5BDVFge0wcfYI4hniTm~uFbajARgLDSi1Ui~mAMoDCHvqUxfMSZ9FSgxBroZMXyZEBGdD0Uq-exmxMIgzavOK7HUCUsWrBUVNJEJd6KsJ2YQ4HdnXlzekOrsDf98T2rUD~CzS6XRQqnQ6Ph2Q757gNamr543beBosXfl48FlpEi4ze3gSynzTb7g-am4J2zqQbtnTs4VUKKP1gaPAEnu7rD9wl4uAV78fbsAzLSO2JUCg6ZfOnyJCUGRYcGzldxdQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "반드시 너를 지키겠어",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 42049,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 5035,
      "web_img": "https://image.laftel.net/carousel/30bdadae-ae4b-40a0-afa9-32f668d5c7ff.jpg?Expires=1719892631&Signature=GrXdHgYRbqFPvbau1SLJWyhBxvICBrlnuh2EzcWqeSBIMJj2SSRrF0TCFAEdZh7xI-5qqOgdi6fHxqZt3BxR0NvDGMRZk7rgB8lv5HqB0RmUhq9lecmsIPLzRThgyE4I6C2fSFr8DanJZvN2XImN617XCwcaeSt~pbKAZtdu79EybealEtzKen71D-zeCqlTNt9pvXuVut9MRSzNMTEASBu3p44UrUH139fUq9wA6Eq3QTKWtWD3a-lCyG1Xed1mMv6Lw9kqBoK6~Vkfab3tL~IgrHIx3punw1U0dhJXmwv6PnJ2~toKQmULRB34kQdYZdwJo5Ugh52kjdtG1Eh02g__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/2e0e9160-d299-449a-9a6d-2c4e2568bab8.jpg?Expires=1719892631&Signature=EStU3HVT-PlzTeO4fFpYeE~-LA4o6g60OhzUyF7kzg4u~yosJcvZKoXBO66mQUBwsUx3pkLdhBqoC6w6g9NJvMAhFCoevK4NE-dcmjqenlfuJnXaMd2-e0QPv96zvpcJ~HQhI~HVJ5k06ntTmajpaHmJJmhu9QtEsj7KgTbiHZdHEI3zm9opMet0TDNZB3qpB7gzU0JFSDK4ocqs5pgPBCjaAVH2gg44nB3YVE9kMpTCyBv9xq6WHIu4C-U0eysoMTRU~zYV5ysWe7Fv5rlWA9ZCcoq-nvxhLbDk94WcgZXzduyUkc8pyGtfBVuW~nJKM79A9st5u-rmZ1cy8-vDoQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/44a15d24-1c67-47d6-985f-87b7b2f3a956.png?Expires=1719892631&Signature=OuvAz89OPA3EeqqaANDuVKvVLr9s2aWVAQRtpH~DQ5EuLEyj9H9ZMRfn~bFn1mKxO8pNFMK88FCwqnnO5rw4q2H3rTKjQKIEkm93Tv5cXy5OihNZxHFqNvv0urmqzlgScl6vyjKHFv4pA8BNQKXVH3wCsU~pCSeWVWynmL2BiHJ4lcYhqhiOeXnHT354O7cblycOn7WlJBXuH6Bm~-NHbFFZg1LPpRQJlzywM3Gzohw3InO0fFM4BAXjcI7Bra-OMemk7~bxHnGzFyiRPIugCUOpyLSKT5udMlPx0~Z2QoMVIKjnhykoG-vNS~k8KqPUVwyUMJQEme~OTut3m3PFzQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "자, 재미있게 놀아볼까",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 42092,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    },
    {
      "id": 5037,
      "web_img": "https://image.laftel.net/carousel/c4782a4e-bc14-4316-aa89-a1968acf0c88.jpg?Expires=1719892631&Signature=Nn5S20FL3C4oa-ehhI~5WmLddcAGD5Nd5k0tm~HN3Gk7Y8aBR3AeHV7fye6xIR7TXcP2DzNK0U71nzgorS50OPDrrrIkE6EFzTsWtS~moLZUfTbMNQN6AwfcP9-KpFLFptzM~-q6fhvEbCvd5Wt0P0rb0NQ6ah3Zz11c1wlnfNMLWkCYLG3nzJiQCZYpfUQpbOOxnNtfjLmxpV4xBn~wh~ocefWbURbQlo0Vcj~gaJtuvPDlGsqwXET2JdX38owFQSBCzW1GUD17N~RAGK-8C~8LhppGoUrzPtvK1CGMpopjsp5Mt8GMCJghGDO4WleLB0uuJS5k-RsYp8NPkxhNkg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "mobile_img": "https://image.laftel.net/carousel/a55d2462-747a-4b21-a9fd-055ec9acfe72.jpg?Expires=1719892631&Signature=HA06m3HchPsztw0O0MwgeOmeVu2xPLuqcejB-Bd0BIT9AfiuVwj~VnHSsUhj2~eCJuSFcF0usspcVLSohmqyPJTl8xwRjehKm6KYJO3SGV3IeWVfitHopvdEvD2ED2bHRSn4HRdeELOHxxWHSBdQ41BKyiyP4aAkVmlPbEFuCkW0fUYe7c96oVPKlh2dtL-G4QpTMuEnzxSnQlSzqqE1k9vL22nbInNUrwyKt-7YxHHaBF9vOwKSIbRn5err9GVcNnRqpb4Ssego2WKSb2jBTUC4~ZupJIzRuM-DaJcL~ykcr6AlRezPWDkVDRw0r0T2lhac6F4TC~us86T6zRbHqA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "logo_img": "https://image.laftel.net/carousel/4a6a7e6e-bc7c-48d2-aee1-56b2de01c9ab.png?Expires=1719892631&Signature=mzjxqe4Wjs7QE~BooCAyauyd2vxFctALvvosoJsT0JFjc8xYmcV6waicvSoiwxa7zvbDIGZYG3R4-f2KGlATbDDDttftNK0Ya~6yFqDcTk11~TpGLNuTl-vzUL4ZWpAjWtjiINlwNgt47souibkmR60~WCyCqRQ52a0kHd45NNipuRyppe7aeI~E~cU~qw2Od1rIXPCfammyf-luY7CNdNtOtKSly0Ev820ARnJS3DNzr0cS1-0Yb-ty4SFJO~2oXFVpfulFJKu2NFkL5rWCWmm3t9-UD~qAv1DEkcS3qV8fdv6bitWoTp-unmFDkVT-Bwr2zFRDOpldS~3yH2Bg~A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
      "content": "마지막은 선배가 연주했으면 했어요",
      "label": "",
      "button_text": "보러가기",
      "is_adult": false,
      "item_destination": 42050,
      "event_destination": null,
      "theme_destination": null,
      "external_destination": null
    }
]

export default MainCarousels;