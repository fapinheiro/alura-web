import React from "react";
import { StyledRegisterVideo } from "./styles";
import useForm from "../../hooks/FormHooks";
import { VideoService } from "../../service/VideoService";

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(true);
    const formCadastro = useForm({
        initialValue: { titulo: "Titulo do video", url: "https://youtube..." }
    });
    const service = VideoService();
    /*
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - titulo
        - url do vídeo 
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o Submit
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel &&
                (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        service.createVideo({
                            titulo: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: '',
                            playlist: 'jogos'
                        })
                        .then((data) => {
                            console.log(data);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input name="titulo" placeholder="Titulo do vídeo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} />
                            <input name="url" placeholder="URL" value={formCadastro.values.url} onChange={formCadastro.handleChange} />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
            }

        </StyledRegisterVideo>
    )
}