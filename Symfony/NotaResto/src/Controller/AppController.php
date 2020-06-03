<?php

namespace App\Controller;

use App\Entity\Review;
use App\Repository\RestaurantRepository;
use App\Repository\ReviewRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(RestaurantRepository $restaurantRepository, ReviewRepository $reviewRepository)
    {

        $restaurants = $restaurantRepository->findLast(10);
        $topTenRestaurants = $reviewRepository->findBestTenRatings();

        // dd($topTenRestaurants);

        return $this->render('app/index.html.twig', [
            'restaurants' => $restaurants,
            'topTenRestaurants' => $topTenRestaurants
        ]);
    }
}
