<?php

namespace App\Form;

use App\Entity\City;
use App\Entity\Restaurant;
use App\Entity\RestaurantPicture;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class RestaurantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom du restaurant'
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description du restaurant'
            ])
            ->add('created_at', DateTimeType::class,  [
                'label' => 'Date de création',
                'widget' => 'single_text',
                'input_format' => 'datetime'
            ])
            ->add('city', EntityType::class, [
                'class' => City::class,
                'choice_label' => 'name',
                'row_attr' => [
                    'class' => 'text-success font-weight-bold',
                ],
                'attr' => [
                    'class' => 'text-dark font-weight-normal restaurant-form-city'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Restaurant::class,
        ]);
    }
}
