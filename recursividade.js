//revisão: ótimo para estruturas como árvores
let explorer = {
    nome: 'root',
    diretorios: [
        {
        nome: 'pasta 1',
        diretorios: [{
            nome: 'subpasta 1',
            diretorios:[]
        }]
    },
    {
        nome: 'romance',
        diretorios:[{
            nome: 'gatos 1',
            diretorios: []
        }]
    },
    {
        nome: 'pasta 2',
        diretorios: [{
            nome: 'subpasta 2',
            diretorios:[]
        }]
    },
    {
        nome: 'romance',
        diretorios:[{
            nome: 'gatos',
            diretorios: [],
        },
        {
            nome: 'romance',
            diretorios:[]
        }
    ]
    }
    ]
}

function buscaArvore(folderName, root){
    if(folderName === root.nome) return root;

    for (const dir of root.diretorios){
        const result = buscaArvore(folderName, dir)
        if(result) return result;
    }
    return null;
}

let findDir = buscaArvore('romance',explorer);
console.log(findDir)
