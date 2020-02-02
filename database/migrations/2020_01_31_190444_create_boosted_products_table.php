<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoostedProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boostedpros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('prod_id')->references('id')->on('products');
            $table->float('old_price');
            $table->integer('order')->default(0);
            $table->integer('status')->default(1); //1 is active
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('boostedpros');
    }
}
