<?php
$parar = false;
class Conta
{
  public $saldo;
  public function __construct($saldo = 0)
  {
    $this->saldo = $saldo;
  }

  public function sacarValor()
  {
    $valor = $this->informarValor("sacar");
    if ($valor < 0) {
      echo "Informe um valor válido!\n";
      return;
    }
    if ($valor > $this->saldo) {
      echo "\nSaldo insuficiente!\n";
      return;
    }
    $this->saldo -= $valor;
    echo "\nSaque realizado com sucesso!\n";
  }
  public function depositarValor()
  {
    $valor = $this->informarValor("depositar");
    if ($valor < $this->saldo || $valor < 0) {
      echo ("Informe um valor válido!\n");
      return;
    }
    $this->saldo += $valor;
    echo "\nDepósito realizado com sucesso!\n";
  }
  public function consultarValor()
  {
    echo "\nSeu saldo atual é de R$ $this->saldo.\n";
  }
  private function informarValor($acao)
  {
    echo "Informe o valor: que deseja $acao: ";
    $valor = trim(fgets(STDIN));
    return $valor;
  }

}
function mostrarMenu()
{
  echo "Escolha uma opção:\n";
  echo "1. Consultar saldo atual\n";
  echo "2. Sacar valor\n";
  echo "3. Depositar valor\n";
  echo "4. Sair\n";
}
function selecionarOpcao(Conta $conta)
{
  echo "Digite a opção desejada: ";
  $opcao = trim(fgets(STDIN));
  switch ($opcao) {
    case "1":
      $conta->consultarValor();
      break;
    case "2":
      $conta->sacarValor();
      break;
    case "3":
      $conta->depositarValor();
      break;
    case "4":
      return true;
    default:
      echo "Erro! Opção inválida!";
      break;
  }
  return false;
}
$conta = new Conta();
while (!$parar) {
  echo "\n";
  mostrarMenu();
  echo "\n";
  $parar = selecionarOpcao($conta);
}