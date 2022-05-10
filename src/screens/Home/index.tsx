import { Container, List} from './styles';
import { Doctor } from '../../components/Doctor';

const DATA = [
    {id: '1', avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGQAZAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgAEAQMHAgj/xAA+EAACAQMCAgUICQMDBQAAAAABAgMABBEFIRIxBhNBUXEiMmFygaGxsgcUFSMkQmKR8FLB0SU14TRDY4KS/8QAGwEAAQUBAQAAAAAAAAAAAAAABQABAgMEBgf/xAAtEQABAwMCAwcEAwAAAAAAAAABAAIDBBEhEjEFE3EiI1FhgZGxMkHB8EKh0f/aAAwDAQACEQMRAD8AbGTal6/GNZjH60plPKgU4t/tMteO6OrKV6sjB7tyPdQ18gYNRTsaXGwRS1MAuDDdKfL3jfjIHgcH+bUVhtIYZOONCGxjJYnb2n0UMR9McgzJKSO2Qk+4be6i0Lo8atFumNtq5avnc95LS4NP2O3ytYiLQNQytlYrNYoanUqVMVKSSlDbw2MEn3lrxyHtK8/aedEqFX91PbztGyxyRNuodeyr4AS/HzZTjbqNkPurxH+7htbePPNurBKj/NBNUA40Hcvb7aMsIGB6tGiJOcZ4gT7d/eaDao+Z1HaF399dRROjDNI381RPG8OvpsF70ZM2Cn9b/MaleNKuOrslUJny3+Y1KJEFZDum5jil7VP9xQ88unPxFMLqaXtWjJvVAJyXTcHGKgE7d1ttWKzMXjHCv5AfIz3Z5/Crl/0mttLt45L2RV4m81V3I7lHb41UuOK0jBdUChSxCsTsB4d+K5PNqU+qXE17cnikY5C5yEXsUeisVNwoV9QeZgBbKipZDCNOSuuWeq9INfljGm2kGmWsjALcXgLyMDyIQcvb+9WtX6NzWNqs2r9J9WnY+cLUrbqfAKCeZAxV20kwEnRFUsRJ5Pb3H4VnppLPeTW4sTGY4+GQlnAyykMoOezPPwovFQ00GI4wPS59zlYrk/UUsJp1vJOsENzqyyM2DnV/LQDnkDtHcM+znV/7P1e0A+z+kFw3dHfoswb0cWAa1xEGSON5ViiSUSfe3EZ4MEnCcO5yTgluyvWt39uxt4Y542+8DvwMDgDwq50ETxZ7AeoCa1tkIHTi6sr8Jq9rGjgcLPbMWRsd6ncc++isGow6lCJba4E0IJ4SGzw+g93hSB0pk6y6iPEC2GJHcSRWPo6ZxqV994EBhAIJ2LcW396H13CKaODnxDSR7LRSVb+dy3ZH9p98t2dWPCFOMLzI7Dn+cqHaqAssYAwOEcvGr6cbcMzOMFMEcOD7d+zf96oavvOnqj4mqIIwyMYylNIXyb4XvRYwbBTkjLv8xqVnRT/p6b82f5jWK0lUlNxGWzQPUf8Aco/XT40fVaCaqv8AqUfrJ81Rbukr5jRn4+FePGAxUEiuS6f0O1v611L2yxhmKJLIwVHw3CSMb49nKuueB9tV7SNJbqOOMlRHwynJzkgLkejzgP8A1FWRVD4blm6thp2TkhyUbnQb6wiMM+vXUkiRqTb2obyV81eJs4HIAZ542qxofRvRNUBE0upmcecs74z7cfzfup31G3S5sJrYwxkSurO/H1ZyBgb8Jzttgjt51nT4FtbRLdbdY+r24g/EX9uBsPCrXVJLNWs6vZXtptMunQNPv8peboF0eVSzwXDYGT96xP7Cl7UdC0qG4Edrp1zGgOCXnPv39IOBvuPCulVU1G0jv0iWeJR9XYsj55g4O/tHd7ahHUOLrSPNuqtnpwGd0wX6BJUHQfTr9pIfrOoWt1Gqs0chRhwNnhZTjdTg437DmtXRvo0uh/WLj60ZjMFUoY8cK95Ocecceyuho6Pw46kMkaxgRcgq54RuSds0v3aNC0kSMxiMh5jAP5jjwOP3qL6iR506uyq3U0bYtRbY+S0kKqAKML3AUL1PedD+n+5oo3m0J1E/foP0/wCagdlhbut2iEfZ0frN8xqV50fbT0Hpb5jUpykTlOfIUD1Pe+jPpT40cblQbUR+LT1k+akBlSV7OwrVKiwZuASjrkq4GQc/1DnzP7eAreVHOsTBDbsr+aw4T6c7YqFlKKQxuuFYhljnWOWJTIXAYFuSA/A1ZpfsLv6tmC7BEROXyMcB7cg78J50dwkoDBiQRtwuQPdVLXBwRkG4uFqW6keVY/qzKc4O/Id9WM451r6mPtBPrMT8ahWGBWk4UQAbtgCpp1U1KYxWUjcSuTlEbtVjt/OVB2mkuAkkzZYoNuQX0AdlZ1C5a/lUwp92/kxnOBv5IY+0gDxqxc2VxbBXnhZI38x+at4H+GlEdRNtgsFa44aFUfzaFaj/ANQvqf5o0ybUG1Ta5X1P7mrTssDd170kfgU9Z/mNZr1pB/AL6z/MaxTlMd05MKEakMXKesnzCjWM5NB9VGLlPFPmFSAypohZ28l5crBEQGbJJbkoHb8P3q/K1tYrIltEHmjVyZ5AGYMuOXYK89H/ACdQeTGcRFfaWWreq2DJdSXaZeFkYyoBuuyjIA5jCn05902t7Nwk2yXrjTjeTQXEbiOWSNeuf+rCnh9/uJoZbtd2EYNvleAlXgbddiRt+3ZV+W7eXqvq7lI0UDjHN9iNu4b+PhVdECLwjvJ/c5rOWtDrjdFadjwO1sva9I14fLtH4v0sMVqa4nvZVa5ASPmkQ5eJ76z1UfFx8C8XfisR7lpD+bl4fzelhaQFnTYTHaymYxyI8KGMruBg/EMfcKadMdzfSRBOtVm4WVhlUXhXJ9wFAdO0y6vkf6gvDGx4XlyOH/n2U429qunwBgQZndTNIFxx9h23wAM4Hoq6FltsBCagaXb3SrrdiljfvDCD1ZUOgP5Qc7fuDSprA/FL6g+Jp06QFmktZZN2MbROe9kYj+5pN1ofil9QfE1CTBKzjdetIH4BNvzP8xqVt0UD7Oj9Z/mNSmO6id04N3UG1Ufio896fNRpsAEscAcya5V0z6TjUrh7XTnP1QDheUf93B7P0/HwrbFA6U2amkkEYuV0zozqdteJqU9k4lFvIsIPYzAcZI7xyGfQaa7cFLm449i8nEvpUKo+Jr5u0LXdQ0C7Fxp0nkllM0DY4ZlB807bcyMjcZrt/R7pDadJ4Jr7TmZfuJFMLkccT4QYYA7ctu/nV01OYDjZRhlEg80uXUovLqW6Iw0zl8jY4PL3YqtDJK7OOtbhBwPJHYSOfbyramOFccsVosxgSHfLPxbnPMA1yzZH2e6/7ddo6Nocxlsf4ER0u3a81G3tnlfgkfDYC8sEns9FN8el6dZzov1brGZS/FIeLGCo5cvzZ9lLXRoD7dtM974/+GpyvYXlIKc+qkXPiBj4UT4fd0RLs5Qbip0zBrcCy9NO33TZx1gU49oB+b3V51VWbTrgL5xQ4qvcX1tZWS3t9cRW9tDKxkllYKqKc8OSfFfdXMumP0rm6Eun9FYzw8XC+oSrsR/41Pp7T3ct80TbG6TDUHc8NyV5+kjpaEZNJ06Rhc9at08qEfcg5PD4k4OO5qE22uRawV4gI7lEAdM7E55j0UqaXbQzSSCUuxVg7jO8gJ8rfvPfXVdU0qyvtMKW9vFi3jV4nQYKjGfJ9GOzu8aedkTWcv8AkPuoxtkeeZsFS0aQLp8Yx+Z/mNShum6pBYW5tbuN+sjcjyd+3P8Ams0OIyrTG66P/SJcS2/RicQtw9a6RMRz4Sdx7cYrkNSpXRUI7s9UOqvrUq5pOr32gXn2jpcxhuEUgnGQ6/0sO0VKla3AOFiqGkg4T/oF5JqGj2l3MqLJLGGYIMAeFb7EkibJ5SkD0Abf2rFSvPngDmAeP5XojSSYifD8Ivokhj1mzZefWEb+lSKCfSL9I2u6Fqk1hpwtETIUSNEWcZHpOPdUqUT4SLtsfFBuNYmHRc2vdY1PXjxatf3FwgbiERfEanGMhBsNhitYAAAAwB2VKldXC0BuAuWkJJyt9ixS+hK/mPCfSDXRujVxI1lljxGGWIpnsBAXHhhyP2qVKEVo7/0ROlJ5Hqq2uaNZyXoZlJPVqM7b+6s1KlZCAtTThf/Z', name: 'Naruto Uzumaki', specialist: 'Hokage'},
    {id: '2', avatar: 'data:image/jpeg;base64,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', name: 'Sasuke Uchiha', specialist: 'Renegado'},
    {id: '3', avatar: 'data:image/jpeg;base64,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', name: 'Kakashi Hatake', specialist: 'Sensei'},
    {id: '4', avatar: 'data:image/jpeg;base64,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', name: 'Madara Uchiha', specialist: 'Vilão'},
    {id: '5', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZkXAN9scHjC0G1cCyT_ZaaU_li2f7qWe8Mu0WDqemzjTRy_V2K9-rgw&s=10', name: 'Jiraya', specialist: 'Sabio'},
    {id: '6', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSYsP-rGPJ0_ljXME48tAawQyWrJ9c0ZV_9v_J5E&s=10', name: 'Shikamaro Nara', specialist: 'Shinob da Folha'},
    {id: '7', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqIZbPuLO3CN4yGS2XJw9tOL4bs0Tt68P0HgU5u-aT4BrwJOppZx-oSo&s=10', name: 'Tobirama Senju', specialist: 'Segundo Hokage'},
    {id: '8', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0tVmTO_pP1KCJBKg4byFE75G_LbNAZYgjAq0iprOvTzdypX_TlFA4S8&s=10', name: 'Might Guy', specialist: 'Sensei'},
]

export function Home () {
    return (
        <Container>
            <List
                data={DATA}
                keyExtractor={ item => item.specialist}
                renderItem={({item}) => <Doctor type='primary' data={item}/>}
                numColumns={2}
            />            
        </Container>
    );
}