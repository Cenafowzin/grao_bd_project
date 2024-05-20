package com.emporio.grao;

import com.emporio.grao.model.Loja;
import com.emporio.grao.repository.LojaRep;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class GraoApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(GraoApplication.class, args);

		Loja loja1 = context.getBean(Loja.class);
		loja1.setId_loja(4);
		loja1.setCidade("pit");
		loja1.setBairro("chacha");
		loja1.setNumero(1234);
		loja1.setRua("rua 333");
		loja1.setTelefone("81999779999");

		LojaRep rep = context.getBean(LojaRep.class);
		rep.update(loja1);

		System.out.println(rep.findAll());
	}
}
