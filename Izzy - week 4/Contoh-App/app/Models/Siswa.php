<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    protected $table = 'siswa';
    protected $fillable = ['nama', 'nik', 'alamat', 'gender', 'created_at', 'updated_at'];
    protected $primaryKey = 'nik';
}
