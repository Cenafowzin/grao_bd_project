package com.emporio.grao;

import com.emporio.grao.model.Loja;
import com.emporio.grao.repository.LojaRep;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class GraoApplication {

	public static void main(String[] args) {
		ApplicationContext context =SpringApplication.run(GraoApplication.class, args);

		Loja loja1 = context.getBean(Loja.class);
		loja1.setId_loja(1);
		loja1.setCidade("olinda");
		loja1.setBairro("jagunço");
		loja1.setNumero(1234);
		loja1.setRua("rua quarenta e oito");
		loja1.setTelefone("81999999999");

		LojaRep rep = context.getBean(LojaRep.class);
		rep.save(loja1);

		System.out.println(rep.findAll());
	}
}
