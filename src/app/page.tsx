import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Package, Smartphone, Truck } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="text-gray-800 body-font flex bg-orange-100 h-screen">
          <div className="container mx-auto flex px-5 py-24 flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="flex flex-col justify-center align-middle text-center">
                <div className="flex justify-center lg:w-full md:w-1/2 w-5/6">
                  <img className="object-cover object-center rounded" alt="hero" src="/assets/logo.svg" />
                </div>
                <h1 className="title-font sm:text-6xl mt-12 text-3xl mb-4 font-semibold text-gray-900">
                  Integração e Monitoramento
                  <br className="hidden lg:inline-block" />
                  para Entregas Eficientes
                </h1>
              </div>
            </div>
            <div className="lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="/assets/central.png" />
              <div className="flex justify-center">
                <Button className="inline-flex font-bold items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-400 rounded-lg text-base mt-4 md:mt-0 w-96 h-16">
                  Teste Agora
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font flex bg-orange-50 h-screen">
          <div className="container px-5 flex flex-col justify-center py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Nossos Recursos Principais
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Descubra como a Central Pedidos pode transformar sua operação de entregas com integração avançada e monitoramento em tempo real.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Smartphone className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integração de Apps</h2>
                  <p className="leading-relaxed text-base">
                    Conecte-se facilmente com aplicativos populares de vendas e entregas, centralizando todas as suas operações.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Monitoramento em Tempo Real</h2>
                  <p className="leading-relaxed text-base">
                    Acompanhe seus motoristas em tempo real, otimizando rotas e melhorando a eficiência das entregas.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestão de Frota</h2>
                  <p className="leading-relaxed text-base">
                    Gerencie sua frota de entrega com facilidade, maximizando a eficiência e reduzindo custos operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-800 body-font bg-orange-200 h-full">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-gray-900">
                Pronto para revolucionar suas entregas?
              </h1>
              <p className="leading-relaxed mt-4">
                Junte-se à Central Pedidos hoje e experimente a diferença que a integração avançada e o monitoramento em tempo real podem fazer para o seu negócio.
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Solicite uma Demonstração</h2>
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                  Nome Completo
                </label>
                <Input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <Input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <Button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Solicitar
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                Seus dados estão seguros conosco. Não compartilhamos informações.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-gray-700 body-font bg-orange-100">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Package className="w-10 h-10 text-orange-500" />
            <span className="ml-3 text-xl">Central Pedidos</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Central Pedidos —
            <a href="https://twitter.com/centralpedidos" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
              @centralpedidos
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}