import '../styles/components/cadastroForncedor.sass'

export default function CadastroForncedor() {
    return (
        <div className='card'>
            <div className="card_header">
                <h2>Cadastro de Fornecedor</h2>
            </div>
            <div className="card_body">
                <div className="forms commum">
                    <label htmlFor="">Nome</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label htmlFor="">CNPJ</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label htmlFor="">Telefone</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label htmlFor="">Site</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label htmlFor="">Celular</label>
                    <input type="text" />
                </div>
                <div className="forms commum">
                    <label htmlFor="">Endereço</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label htmlFor="">Bairro</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label htmlFor="">Cidade</label>
                    <input type="text" />
                </div>
                <div className="forms bank_info commum">
                    <div className='commum'>
                        <label htmlFor="">Banco</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Tipo de Conta</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Nº da Conta</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Agência</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">PIX</label>
                        <input type="text" />
                    </div>
                </div>


                <div className="action_btn commum">
                    <div className="btn">Adicionar</div>
                    <div className="btn">Remover</div>
                    <div className="btn">Editar</div>
                    <div className="btn">Cancelar</div>
                </div>
            </div>
        </div>
    );
}