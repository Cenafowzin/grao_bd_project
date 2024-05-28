package com.emporio.grao.controller;

import com.emporio.grao.model.BkPedido;
import com.emporio.grao.model.BkProduto;
import com.emporio.grao.model.BkVenda;
import com.emporio.grao.repository.BackupRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BackupController {

    @Autowired
    private BackupRep backupRep;

    @GetMapping("/bk_funcionario")
    public ResponseEntity<?> getBackupDetails() {
        try {
            Object backupData = backupRep.getFuncionariosBackup();
            return ResponseEntity.ok(backupData);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error retrieving backup data: " + e.getMessage());
        }
    }

    @GetMapping("/bk_pedido")
    public ResponseEntity<?> getPedidoBackup() {
        try {
            List<BkPedido> pedidos = backupRep.getPedidosBackup();
            if (pedidos.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(pedidos);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving pedido backup: " + e.getMessage());
        }
    }

    @GetMapping("/bk_produto")
    public ResponseEntity<?> getProdutoBackup() {
        try {
            List<BkProduto> produtos = backupRep.getProdutosBackup();
            return ResponseEntity.ok(produtos);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error retrieving produto backup: " + e.getMessage());
        }
    }

    @GetMapping("/bk_venda")
    public ResponseEntity<?> getBackupVendas() {
        try {
            var backupData = backupRep.getVendasBackup();
            return ResponseEntity.ok(backupData);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error retrieving backup data: " + e.getMessage());
        }
    }

}
