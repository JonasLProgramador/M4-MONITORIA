let products = [
  {  
    Nome: "Smartphone XYZ",
    Valor: "$499.99",
    Imagem: "imagem_smartphone_xyz.jpg",
    Link: "smartphone-xyz"
    },
    
    {
    Nome: "Notebook ABC",
    Valor: "$899.99",
    Imagem: "imagem_notebook_abc.jpg",
    Link: "notebook-abc"
    },
    
    {
    Nome: "Câmera DSLR 123",
    Valor: "$599.99",
    Imagem: "imagem_camera_dslr_123.jpg",
    Link: "camera-dslr-123"
    },
    
    {
    Nome: "Tênis Esportivo XYZ",
    Valor: "$79.99",
    Imagem: "imagem_tenir_esportivo_xyz.jpg",
    Link: "tenis-esportivo-xyz"
    },
    
    {
    Nome: "Fones de Ouvido Bluetooth ABC",
    Valor: "$49.99",
    Imagem: "imagem_fones_ouvido_bluetooth_abc.jpg",
    Link: "fones-ouvido-bluetooth-abc"
    },
    
    {
    Nome: "Relógio Inteligente XYZ",
    Valor: "$129.99",
    Imagem: "imagem_relogio_inteligente_xyz.jpg",
    Link: "relogio-inteligente-xyz"
    },
    
    {
    Nome: "Mochila Escolar ABC",
    Valor: "$39.99",
    Imagem: "imagem_mochila_escolar_abc.jpg",
    Link: "mochila-escolar-abc"
    },
    
    {
    Nome: "Console de Videogame XYZ",
    Valor: "$299.99",
    Imagem: "imagem_console_videogame_xyz.jpg",
    Link: "console-videogame-xyz"
    },
    
    {
    Nome: "Tablet ABC",
    Valor: "$199.99",
    Imagem: "imagem_tablet_abc.jpg",
    Link: "tablet-abc"
    },
    
    {
    Nome: "Impressora XYZ",
    Valor: "$149.99",
    Imagem: "imagem_impressora_xyz.jpg",
    Link: "impressora-xyz"
    },
    
    {
    Nome: "Caixa de Som Bluetooth ABC",
    Valor: "$69.99",
    Imagem: "imagem_caixa_som_bluetooth_abc.jpg",
    Link: "caixa-som-bluetooth-abc"
    },
    
    {
    Nome: "Cadeira de Escritório XYZ",
    Valor: "$89.99",
    Imagem: "imagem_cadeira_escritorio_xyz.jpg",
    Link: "cadeira-escritorio-xyz"
    },
    
    {
    Nome: "Teclado Gamer ABC",
    Valor: "$59.99",
    Imagem: "imagem_teclado_gamer_abc.jpg",
    Link: "teclado-gamer-abc"
    },
    
    {
    Nome: "Mouse Sem Fio XYZ",
    Valor: "$29.99",
    Imagem: "imagem_mouse_sem_fio_xyz.jpg",
    Link: "mouse-sem-fio-xyz"
    },
    
    {
    Nome: "Câmera de Segurança ABC",
    Valor: "$79.99",
    Imagem: "imagem_camera_seguranca_abc.jpg",
    Link: "camera-seguranca-abc"
    }
   
  

]


let allProducts = () =>{
    return products
}

let detailProduct = (link) =>{
   const product = products.filter(product => product.Link === link) 
   return product
}

export { allProducts, detailProduct }
