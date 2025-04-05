namespace escola{

    const btnSalvar = document.getElementById("Salvar") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoanoNasc = document.getElementById("campoAno") as HTMLInputElement;
    const campoCpf = document.getElementById("campoCpf") as HTMLInputElement;
    const campoEndereco = document.getElementById("campoEndereco") as HTMLInputElement;
    const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;

    btnSalvar.addEventListener("click",()=>{

 
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
    });

    const matricula = document.getElementById("Matricula") as HTMLInputElement;
    const curso = document.getElementById("Curso") as HTMLInputElement;
    const escola = document.getElementById("Escola") as HTMLInputElement;
    const nota1 = document.getElementById("Nota1") as HTMLInputElement;
    const nota2 = document.getElementById("Nota2") as HTMLInputElement;
    const nota3 = document.getElementById("Nota3") as HTMLInputElement;
    const nota4 = document.getElementById("Nota4") as HTMLInputElement;
    const btnCalcular = document.getElementById("Calcular") as HTMLButtonElement;

    btnCalcular.addEventListener("click",()=>{

    let p = new Aluno();

        p.matricula = matricula.value;
        p.curso = curso.value;
        p.escola = escola.value;
        p.nota1 = parseInt(nota1.value);
        p.nota2 = parseInt(nota2.value);
        p.nota3 = parseInt(nota3.value);
        p.nota4 = parseInt(nota4.value); 
        
    }
)};