<?php

namespace App\Form;

use App\Entity\City;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;

class CityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de la ville'
            ])
            ->add('zipcode', TextType::class, [
                'label' => 'Code Postal',
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Le code postal doit comporter au moins {{ limit }} caractères',
                        'max' => 5,
                        'maxMessage' => 'Le code postal doit comporter seulement {{ limit }} caractères',
                    ]),
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => City::class,
        ]);
    }
}
