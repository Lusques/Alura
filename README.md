# 📘 Alura: Google Tag Manager: aplicação e gerenciamento de tags

## 🧭 Índice

- [Resumo](#resumo)
- [Conceitos Importantes](#conceitos-importantes)
- [Passo a Passo](#passo-a-passo)
- [Exemplos Práticos](#exemplos-práticos)
- [Dicas e Observações](#dicas-e-observações)
- [Fontes e Referências](#fontes-e-referências)

---

## 📝 Resumo

- Projeto em com Angular 17+ e Bootstrap desenvolvido com intuito de praticar conceitos de Google Tag Manager.

---

## 📌 Conceitos Importantes

| Conceito    | Explicação rápida                                    |
| ----------- | ---------------------------------------------------- |
| `dataLayer` | Array usado pelo GTM para receber eventos            |
| Evento GTM  | Objeto JS com a estrutura: `{ event: string, ... }`  |
| SPA         | Single Page Application – precisa de tracking manual |

---

## 📌 GTM

| Conceito                                         | Explicação rápida                                                                                                                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cônteiner                                        | Um `container` é um ambiente que armazena todas as suas tags, gatilhos e variáveis para um ou mais sites ou apps, funcionando como uma "caixa central de controle" para gerenciar e disparar eventos sem precisar alterar o código-fonte. |
| Tags                                             | As `Tags` são pequenos trechos de código (snippets) que colocamos dentro do nosso site para ativar os pixels de rastreamento e outros scripts de monitoramento que teremos dentro da nossa aplicação                                      |
| Tipo de Tag                                      | Descrição                                                                                                                                                                                                                                 |
|                                                  |                                                                                                                                                                                                                                           |
| **Tags de Análise**                              | Coletam dados sobre o comportamento dos usuários, como visualizações de página, cliques e interações.                                                                                                                                     |
| **Tags de Conversão**                            | Rastreiam ações importantes, como compras ou preenchimento de formulários, e indicam o sucesso de campanhas.                                                                                                                              |
| **Tags de Monitoramento de Eventos**             | Rastreiam interações específicas no site, como cliques em botões, visualizações de vídeos, e outros eventos.                                                                                                                              |
| **Tags de Terceiros**                            | São tags fornecidas por ferramentas externas para diversas funções, como remarketing e otimização de site.                                                                                                                                |
|                                                  |                                                                                                                                                                                                                                           |
| Tag: Google Analytics (GA4, Universal Analytics) | Envia dados de interação do usuário para o Google Analytics, como visualizações de página e eventos.                                                                                                                                      |
| Tag: Google Ads (AdWords)                        | Rastreia conversões e eventos de remarketing para campanhas publicitárias no Google Ads.                                                                                                                                                  |
| Tag: Facebook Pixel                              | Rastreia atividades de visitantes no seu site e permite criar públicos para anúncios no Facebook/Instagram.                                                                                                                               |
| Tag: Hotjar                                      | Coleta dados sobre o comportamento dos usuários, como gravações de sessões, mapas de calor e enquetes.                                                                                                                                    |
| Tag: Custom HTML                                 | Permite inserir código JavaScript personalizado, como scripts de rastreamento ou integrações com outras ferramentas.                                                                                                                      |
| Tag: LinkedIn Insight Tag                        | Rastreia conversões e cria públicos de remarketing para campanhas do LinkedIn.                                                                                                                                                            |
| Tag: Twitter Universal Website Tag               | Rastreia interações no site e vincula dados de conversões ao Twitter Ads.                                                                                                                                                                 |
| Tag: Pinterest Tag                               | Rastreia a interação do usuário com o site e permite remarketing e rastreamento de conversões no Pinterest.                                                                                                                               |
| Tag: Google Optimize                             | Implementa testes A/B e outras experiências de otimização no seu site.                                                                                                                                                                    |
| Tag: Conversion Linker                           | Garante que o Google Ads e Analytics recebam dados corretamente sobre cliques em links de conversão.                                                                                                                                      |
| Tag: VWO (Visual Website Optimizer)              | Implementa testes A/B e otimizações no site.                                                                                                                                                                                              |
|                                                  |                                                                                                                                                                                                                                           |
| Acionador                                        | Método que escuta um evento e é ativado de acordo com uma série de validações e regras de negócio, quando ele é acionado a sua função é disparar uma tag.                                                                                 |
| Variáveis                                        | São usadas para coletar, armazenar e transmitir dados entre os componentes do GTM. Permitem personalizar a implementação de tags com base nos objetivos da sua aplicação.                                                                 |

## Observações
- Container: Ambiente onde as tags, acionadores e variáveis ficam organizados.
- Tags: [ Coletam dados ] e os enviam para ferramentas externas.
- Acionadores (Triggers): Definem quando as tags devem ser disparadas com base em eventos ou condições.
- Variáveis: [ Armazenam dados ] temporários e os utilizam nas tags e acionadores.