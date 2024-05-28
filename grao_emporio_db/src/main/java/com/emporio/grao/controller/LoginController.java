package com.emporio.grao.controller;

import com.emporio.grao.model.Funcionario;
import com.emporio.grao.repository.FuncionarioRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoginController {

    @Autowired
    private FuncionarioRep funcionarioRep;

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody Funcionario loginRequest) {
        try {
            Funcionario funcionario = funcionarioRep.findFuncByEmail(loginRequest.getEmail());
            if (funcionario != null && funcionario.getSenha().equals(loginRequest.getSenha())) {
                Map<String, Object> response = new HashMap<>();
                response.put("nome", "Bem vindo " + funcionario.getNome() + "!");
                response.put("id_funcionario", funcionario.getId_funcionario());

                return ResponseEntity.ok().body(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao processar o login");
        }
    }
}
