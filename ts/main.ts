namespace escola{

    const cadastroAluno = document.getElementById("cadastroAluno") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoanoNasc = document.getElementById("campoAno") as HTMLInputElement;
    const campoCpf = document.getElementById("campoCpf") as HTMLInputElement;
    const campoEndereco = document.getElementById("campoEndereco") as HTMLInputElement;
    const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;

    cadastroAluno.addEventListener("click",()=>{

 
        let p = new Pessoa();
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoanoNasc.value);
        p.cpf = campoCpf.value;
        p.endereco = campoEndereco.value;
        p.telefone = campoTelefone.value;

        document.getElementById ("campoNome").textContent = p.nome;
        document.getElementById ("anoNasc").textContent = p.anoNasc.toString();
        document.getElementById ("Cpf").textContent = p.cpf.toString();
        document.getElementById ("Endereco").textContent = p.endereco.toString();
        document.getElementById ("Telefone").textContent = p.telefone.toString();
    })

    const calcMedia = document.getElementById("calcMedia") as HTMLButtonElement;
    const matricula = document.getElementById("matricula") as HTMLInputElement;
    const curso = document.getElementById("curso") as HTMLInputElement;
    const escola = document.getElementById("escola") as HTMLInputElement;
    const nota1 = document.getElementById("nota1") as HTMLInputElement;
    const nota2 = document.getElementById("nota2") as HTMLInputElement;
    const nota3 = document.getElementById("nota3") as HTMLInputElement;
    const nota4 = document.getElementById('nota4') as HTMLInputElement;

    calcMedia.addEventListener("click",()=>{

        let p = Pessoa();

        p.matricula = matricula.value;
        p.curso = curso.value;
        p.escola = escola.value;
        p.nota1 = parseInt(nota1.value);
        p.nota2 = parseInt(nota2.value);
        p.nota3 = parseInt(nota3.value);
        p.nota4 = parseInt(nota4.value);

}}