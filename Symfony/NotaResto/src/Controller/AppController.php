<?php

namespace App\Controller;

use App\Repository\RestaurantRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(RestaurantRepository $restaurantRepository)
    {
        $restaurants = $restaurantRepository->findLast(10);

        // dd($restaurants);

        return $this->render('app/index.html.twig', [
            'restaurants' => $restaurants,
        ]);
    }
}
