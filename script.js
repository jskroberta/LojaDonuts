function somaDonuts() {
    const taxaFixa = 0.05
    const preçoDonut = document.getElementById("SaborDonut").value;	

    let numqtdCliente = document.getElementById("qtdDonuts").value;
    let subTotal = numqtdCliente * preçoDonut;
    let taxa = subTotal * taxaFixa;
    let total = taxa + subTotal;

    document.getElementById("subTotal").value = subTotal;
    document.getElementById("total").value = total;

}