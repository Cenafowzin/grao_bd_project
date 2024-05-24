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
	}
}

