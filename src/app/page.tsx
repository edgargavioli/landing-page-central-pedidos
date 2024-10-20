'use client';

import { Button } from "@/components/ui/button"
import { Smartphone, MapPin, Truck, DollarSign, Clock, Navigation } from "lucide-react"
import Image from 'next/image';
import { CarouselSize } from '@/components/carousel';

export default function LandingPage() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-orange-50">
            <header className="bg-orange-500 text-white body-font sticky top-0 z-10">
                <div className="container mx-auto flex p-5 flex-row items-center justify-between">
                    <a className="flex title-font font-medium items-center text-white">
                        <Image src="/assets/central.png" alt="hero" className='w-14' height={200} width={200} />
                        <span className="ml-3 text-xl">Central Pedidos</span>
                    </a>
                    {/* <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <nav className={`${isMenuOpen ? 'flex opacity-100 max-h-screen' : 'hidden opacity-0 max-h-0 overflow-hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-orange-500 md:bg-transparent `}>
                        <a className="mr-5 hover:text-orange-200 py-2 md:py-0">Início</a>
                        <a className="mr-5 hover:text-orange-200 py-2 md:py-0">Recursos</a>
                        <a className="mr-5 hover:text-orange-200 py-2 md:py-0">Sobre</a>
                        <a className="mr-5 hover:text-orange-200 py-2 md:py-0">Contato</a>
                    </nav> */}
                </div>
            </header>

            <main className="flex-grow">
                <section className="text-gray-800 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:py-24 flex-col items-center relative">
                        <div className="text-center mb-10">
                            <div
                                className='flex items-center justify-center mb-12'
                            >
                                <Image
                                    src='assets/logo.svg'
                                    width={200}
                                    height={200} alt={''} />
                            </div>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                Integração e Monitoramento
                                <br className="hidden sm:inline-block" />
                                para Entregas Eficientes
                            </h1>
                            <p className="mb-8 leading-relaxed text-sm md:text-base">
                                A Central Pedidos oferece integração perfeita com aplicativos de vendas e entregas como iFood, além de monitoramento em tempo real dos motoristas para otimizar suas operações.
                            </p>
                            <div className="flex justify-center flex-col sm:flex-row">
                                <Button className="mb-2 sm:mb-0 sm:mr-2 bg-orange-500 hover:bg-orange-600 text-white" onClick={() => window.open('https://centralpedidos.com.br/dashboard')}>
                                    Teste Agora!
                                </Button>
                                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100"
                                    onClick={() => window.open('https://wa.me/449920025146?text=Olá, queria saber mais sobre a idéia')}
                                >
                                    Contate-nos
                                </Button>
                            </div>
                        </div>
                        <div className="w-full mt-8 lg:mt-20 relative drop-shadow-lg">
                            <Image
                                className="absolute top-[-4rem] left-0 right-0 mx-auto object-cover object-center rounded w-full h-72 md:h-[40rem]"
                                alt="hero"
                                src="/assets/central/1.svg"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </section>

                <section className="text-gray-800 md:mt-[28rem] mt-36 body-font bg-white">
                    <div className="container px-5 py-12 md:py-24 mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                                Nossos Recursos Principais
                            </h2>
                            <p className="leading-relaxed mx-auto text-gray-500 text-sm md:text-base">
                                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
                            </p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="flex rounded-lg h-full bg-orange-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                            <Smartphone className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Integração de Apps</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">
                                            Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="flex rounded-lg h-full bg-orange-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Monitoramento em Tempo Real</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">
                                            Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="flex rounded-lg h-full bg-orange-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                            <Truck className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Gestão de Frota</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">
                                            Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8 lg:mt-20 relative">
                        <Image
                            className="absolute top-[-4rem] left-0 right-0 mx-auto object-cover object-center rounded w-full h-72 md:h-[40rem]"
                            alt="hero"
                            src="/assets/central/2.svg"
                            width={400}
                            height={400}
                        />
                    </div>
                </section>
                <section className="text-gray-800 md:mt-[32rem] mt-36 body-font bg-orange-100">
                    <div className="container px-5 py-12 md:py-24 mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                                Aplicativo do Motoboy
                            </h2>
                            <p className="leading-relaxed mx-auto text-gray-600 text-sm md:text-base max-w-2xl">
                                Nosso aplicativo exclusivo para motoboys oferece ferramentas poderosas para otimizar entregas e aumentar a produtividade.
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                            <Navigation className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Navegação Inteligente</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">
                                            Rotas otimizadas e mais eficientes, navegação em tempo real para realizar sua entrega rápidamente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Gestão de Tempo</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">
                                            Acompanhe seu tempo de trabalho, pausas e entregas para maximizar sua produtividade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                            <DollarSign className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Ganhos Transparentes</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">
                                            Visualize seus ganhos em tempo real e tenha um histórico detalhado de suas entregas e pagamentos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => window.open('https://centralpedidos.com.br/motoboy')}>
                                Acesso o aplicativo agora!
                            </Button>
                        </div>
                    </div>
                </section>

                <section className='text-gray-800 flex flex-col justify-center items-center body-font bg-orange-100'>
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                        Nossos Parceiros    
                    </h2>
                    <CarouselSize/>
                </section>

                <section className="text-gray-800 body-font bg-orange-200">
                    <div className="container px-5 py-12 md:py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Pronto para revolucionar suas entregas?
                            </h2>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                Junte-se à Central Pedidos hoje e experimente a diferença que uma aplicação especializada com integrações avançada e monitoramento em tempo real podem fazer para o seu negócio.
                            </p>
                            <div className='flex justify-center mt-11'>
                                <Button variant="default" className="w-52 font-bold"
                                    onClick={() => window.open('https://wa.me/449920025146?text=Olá, queria saber mais sobre a idéia')}
                                >
                                    Contate-nos
                                </Button>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            

            <footer className="text-gray-700 body-font bg-orange-100">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <div
                            className='flex items-center justify-center'
                        >
                            <Image
                                src='assets/logo.svg'
                                width={200}
                                height={200} alt={''} />
                        </div>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">
                        Copyright©2024, Central Pedidos. Todos os direitos reservados.
                    </p>

                </div>
            </footer>
        </div>
    )
}