package com.cg.vms.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.vms.exception.AdminNotFoundException;
import com.cg.vms.exception.CandidateNotFoundException;
import com.cg.vms.model.Admin;
import com.cg.vms.model.Candidate;
import com.cg.vms.service.AdminService;

@RestController
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	
	@PostMapping("/admin/add")
	public Admin insertData(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}
	
	@GetMapping("/admin/all")
	public List<Admin> viewAllAdmins() {
		return adminService.viewAllAdmins();
	}
	
	
	@GetMapping("/admin/{adminId}") 
	public ResponseEntity<Admin> viewAdmin(@PathVariable( value="adminId") Long adminId) throws AdminNotFoundException{
	Admin admin=adminService.getAdminById(adminId).orElseThrow(() -> new AdminNotFoundException("No Admin Data Available with Admin Id: " +adminId));
	return ResponseEntity.ok().body(admin);
	}
	
	@DeleteMapping("/admin/{adminId}") 
	public String deleteAdmin(@PathVariable( value="adminId") Long adminId) throws AdminNotFoundException{
		Admin admin=adminService.getAdminById(adminId).orElseThrow(() -> new AdminNotFoundException("No Admin Data Available with Admin Id: " +adminId));
		adminService.deleteAdmin(admin);
		return "Admin Details Deleted Successfully";
	}

}
