<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class AppController extends AbstractController {

    /**
    * @Route("/", name="index")
    */
    public function index() {

        // $response = new Response( '<h1> Hello World ! </h1>' );
        // dd($response);
        // return $response;

        return $this->render('/app/index.html.twig');

    }

    /**
    * @Route("/a-propos", name="about")
    */
    public function about() {

        $about = new Response( '<h1> A Propos </h1>' );

        return $about;
    }
}