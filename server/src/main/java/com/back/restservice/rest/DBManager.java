package com.back.restservice.rest;

import java.sql.*;

public class DBManager {
    private Connection connection = null;

    public void connectDB() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306?useSSL=false", "root", "root");
            System.out.println("Connection created");
            this.createDB();
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }

    private void createDB() {
        String sql = "CREATE DATABASE IF NOT EXISTS boxinator";
        PreparedStatement stmt;
        try {
            stmt = this.connection.prepareStatement(sql);
            stmt.execute();
            System.out.print("Boxinator database created.");
            this.closeConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void closeConnection() {
        try {
            this.connection.close();
            System.out.println("Connection closed");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
