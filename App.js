import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const restaurants = [
  {
    info: {
      id: '209764',
      name: 'Third Wave Coffee',
      cloudinaryImageId: 'd96267738c19ec62acb5390e52faba41',
      locality: 'Ambalipura',
      areaName: 'Haralur',
      costForTwo: '₹400 for two',
      cuisines: ['Beverages', 'Bakery', 'Continental'],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '209764',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '274773',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.9,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '4.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 00:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/third-wave-coffee-ambalipura-haralur-bangalore-209764',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '43850',
      name: 'The Nosh House',
      cloudinaryImageId: 't6c2esjgibs3nluwubvk',
      locality: 'Kasavanahalli',
      areaName: 'Sarjapur Road',
      costForTwo: '₹600 for two',
      cuisines: [
        'Continental',
        'Indian',
        'Desserts',
        'Italian',
        'American',
        'Mediterranean',
        'Mexican',
        'Thai',
        'Asian',
        'Pan-Asian',
        'North Indian',
        'Home Food',
        'Healthy Food',
        'Snacks',
        'Pizzas',
        'Pastas',
        'Salads',
        'Beverages',
        'Bakery',
      ],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: '43850',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3800,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3800,
      },
      parentId: '21005',
      avgRatingString: '4.5',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-02 22:30:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'C',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-nosh-house-kasavanahalli-sarjapur-road-bangalore-43850',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '222037',
      name: 'Chaayos Chai+Snacks=Relax',
      cloudinaryImageId: '2beebd3688e63e027ee8a11c1c8a72c8',
      locality: 'Doddakannelli',
      areaName: 'Bellandur',
      costForTwo: '₹250 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Chaat',
        'Desserts',
        'Home Food',
        'Italian',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'Sweets',
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '222037',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3800,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3800,
      },
      parentId: '281782',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.8,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '3.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 02:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-doddakannelli-bellandur-bangalore-222037',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '286575',
      name: 'Chai Point',
      cloudinaryImageId: 'hwz6bkjkrjthkygoudgq',
      locality: 'Doddakannelli',
      areaName: 'Sarjapur Road',
      costForTwo: '₹150 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'South Indian',
        'Punjabi',
        'Chaat',
        'Indian',
        'American',
        'North Indian',
        'Fast Food',
        'Desserts',
        'Cafe',
        'Healthy Food',
        'Home Food',
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '286575',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3800,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3800,
      },
      parentId: '1607',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.8,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        lastMileTravelString: '3.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 05:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chai-point-doddakannelli-sarjapur-road-bangalore-286575',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '241027',
      name: 'Namaste',
      cloudinaryImageId: 'dtcwa1rxdskp3crqvpr3',
      locality: '3rd Sector',
      areaName: 'Hsr Layout',
      costForTwo: '₹100 for two',
      cuisines: [
        'South Indian',
        'Thalis',
        'Biryani',
        'Desserts',
        'Beverages',
        'Indian',
      ],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: '241027',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6200,
      },
      parentId: '366271',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 7.5,
        serviceability: 'SERVICEABLE',
        slaString: '35 mins',
        lastMileTravelString: '7.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 01:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹100 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/namaste-3rd-sector-hsr-layout-bangalore-241027',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '48078',
      name: 'Kanti Sweets',
      cloudinaryImageId: 'gxjqhurst34q1sjlpnni',
      locality: 'Kaikondrahalli',
      areaName: 'Kaikodarahalli',
      costForTwo: '₹150 for two',
      cuisines: ['Sweets'],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: '48078',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3200,
      },
      parentId: '4700',
      avgRatingString: '4.4',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.8,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '2.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-02 22:40:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/kanti-sweets-kaikondrahalli-kaikodarahalli-bangalore-48078',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '304',
      name: 'A2B - Adyar Ananda Bhavan',
      cloudinaryImageId: 'fwkkx0iaiuyojevcxxnp',
      locality: 'Dr Puneeth Rajkumar Rd',
      areaName: 'HSR Layout',
      costForTwo: '₹300 for two',
      cuisines: ['South Indian', 'North Indian', 'Sweets', 'Chinese'],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: '304',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6200,
      },
      parentId: '22',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.9,
        serviceability: 'SERVICEABLE',
        slaString: '36 mins',
        lastMileTravelString: '7.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-02 22:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹100 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-dr-puneeth-rajkumar-rd-hsr-layout-bangalore-304',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '351958',
      name: 'Aligarh House -Mughlai Biryani',
      cloudinaryImageId: 'ef0e1cdb0fc48b9ff93b4366c1221036',
      locality: 'Junnasandra',
      areaName: 'Sarjapur Road',
      costForTwo: '₹270 for two',
      cuisines: [
        'Biryani',
        'Mughlai',
        'Kebabs',
        'North Indian',
        'Lucknowi',
        'Fast Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '351958',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3800,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3800,
      },
      parentId: '346372',
      avgRatingString: '3.8',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-02 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/aligarh-house-mughlai-biryani-junnasandra-sarjapur-road-bangalore-351958',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '60657',
      name: 'Cupcake Bliss Cake & Desserts',
      cloudinaryImageId: '40f193d8b23afb2988489dac1258962f',
      locality: 'Junnasandra',
      areaName: 'Sarjapur Road',
      costForTwo: '₹200 for two',
      cuisines: ['Bakery', 'Desserts', 'Ice Cream', 'Beverages'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '60657',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3200,
      },
      parentId: '66732',
      avgRatingString: '3.8',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-junnasandra-sarjapur-road-bangalore-60657',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '19627',
      name: 'WarmOven Cake & Desserts',
      cloudinaryImageId: 'e938fb5f416cc2c28b4b519cf27b04cc',
      locality: 'Junnasandra',
      areaName: 'Sarjapur Road',
      costForTwo: '₹200 for two',
      cuisines: ['Bakery', 'Desserts', 'Ice Cream', 'Beverages'],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '19627',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3900,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3900,
      },
      parentId: '9696',
      avgRatingString: '3.9',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-junnasandra-sarjapur-road-bangalore-19627',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '342032',
      name: 'Bhartiya Jalpan',
      cloudinaryImageId: 'ybfyjdu8fhlgqj6i9dlh',
      locality: '1st Sector',
      areaName: 'HSR Layout',
      costForTwo: '₹450 for two',
      cuisines: ['North Indian', 'Sweets', 'Desserts', 'Chaat'],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: '342032',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5600,
      },
      parentId: '7518',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.5,
        serviceability: 'SERVICEABLE',
        slaString: '34 mins',
        lastMileTravelString: '6.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 01:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/bhartiya-jalpan-1st-sector-hsr-layout-bangalore-342032',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '237150',
      name: 'Lo! - Low Carb and Keto Foods',
      cloudinaryImageId: 'kuddmk7vhkznjtq5kt0w',
      locality: 'Ambalipura',
      areaName: 'Sarjapur',
      costForTwo: '₹150 for two',
      cuisines: ['Healthy Food', 'Keto', 'North Indian', 'Continental'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '237150',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '8282',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.2,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        lastMileTravelString: '4.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 00:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-ambalipura-sarjapur-bangalore-237150',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '167427',
      name: 'BIB - Breakfast in the Box',
      cloudinaryImageId: 'd93k3ekvyoj8z3yxknrb',
      locality: 'Daddakanahalli',
      areaName: 'Sarjapur Road',
      costForTwo: '₹350 for two',
      cuisines: ['American'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '167427',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5000,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5000,
      },
      parentId: '45396',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-02 15:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'UPTO ₹40',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/bib-breakfast-in-the-box-daddakanahalli-sarjapur-road-bangalore-167427',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '503',
      name: 'Kaati Zone Rolls & Wraps',
      cloudinaryImageId: 'lmjfpoiooblbtaqngz7s',
      locality: 'Junnasandra',
      areaName: 'Sarjapur Road',
      costForTwo: '₹150 for two',
      cuisines: ['Fast Food', 'Bengali', 'Beverages', 'Desserts'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '503',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3200,
      },
      parentId: '248306',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 03:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-junnasandra-sarjapur-road-bangalore-503',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '407047',
      name: 'Momo Zone - The Momo Company',
      cloudinaryImageId: 'pinn06puvmxk0tai6ncz',
      locality: 'Junnasandra',
      areaName: 'Sarjapur Road',
      costForTwo: '₹150 for two',
      cuisines: ['Chinese', 'Tibetan', 'Fast Food'],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '407047',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3200,
      },
      parentId: '382343',
      avgRatingString: '3.9',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/momo-zone-the-momo-company-junnasandra-sarjapur-road-bangalore-407047',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '418488',
      name: 'NOTO - Healthy Ice Cream',
      cloudinaryImageId: '544f9e6dce1efb7054e4ac5d98aba049',
      locality: 'Kaikondrahalli',
      areaName: 'Bellandur Sarjapur',
      costForTwo: '₹250 for two',
      cuisines: ['Ice Cream'],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: '418488',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3200,
      },
      parentId: '7158',
      avgRatingString: '4.3',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.8,
        serviceability: 'SERVICEABLE',
        slaString: '17 mins',
        lastMileTravelString: '2.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 05:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/noto-healthy-ice-cream-kaikondrahalli-bellandur-sarjapur-bangalore-418488',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '59797',
      name: 'Indiana Burgers',
      cloudinaryImageId: 'q7weese49uvbikccvw1x',
      locality: 'Junnasandra',
      areaName: 'Sarjapur Road',
      costForTwo: '₹150 for two',
      cuisines: ['Burgers', 'American', 'Fast Food', 'Beverages', 'Desserts'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '59797',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3200,
      },
      parentId: '5714',
      avgRatingString: '3.8',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 03:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹75 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/indiana-burgers-junnasandra-sarjapur-road-bangalore-59797',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '6909',
      name: 'FreshMenu',
      cloudinaryImageId: '6c4de7b481d3614370e5062b2f33e7d6',
      locality: 'Green Glen Layout',
      areaName: 'Bellandur Sarjapur',
      costForTwo: '₹250 for two',
      cuisines: [
        'Continental',
        'Chinese',
        'Oriental',
        'Asian',
        'Healthy Food',
        'Fast Food',
        'Indian',
        'Desserts',
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: '6909',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5600,
      },
      parentId: '398',
      avgRatingString: '4.0',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.2,
        serviceability: 'SERVICEABLE',
        slaString: '38 mins',
        lastMileTravelString: '6.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 00:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'EVERY ITEM',
        subHeader: '@ ₹99',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/freshmenu-green-glen-layout-bellandur-sarjapur-bangalore-6909',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '72821',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'Dodda Kannali',
      areaName: 'Kaikondrahalli',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '72821',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '166',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.1,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '4.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-king-dodda-kannali-kaikondrahalli-bangalore-72821',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '4750',
      name: 'Subway',
      cloudinaryImageId: '1ace5fa65eff3e1223feb696c956b38b',
      locality: 'Kaikondrahalli',
      areaName: 'Sarjapur Road',
      costForTwo: '₹350 for two',
      cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '4750',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5500,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5500,
      },
      parentId: '2',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-03 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/subway-kaikondrahalli-sarjapur-road-bangalore-4750',
      type: 'WEBLINK',
    },
  },
];

const resObj = {
  info: {
    id: '209764',
    name: 'Third Wave Coffee',
    cloudinaryImageId: 'd96267738c19ec62acb5390e52faba41',
    locality: 'Ambalipura',
    areaName: 'Haralur',
    costForTwo: '₹400 for two',
    cuisines: ['Beverages', 'Bakery', 'Continental'],
    avgRating: 4.3,
    feeDetails: {
      restaurantId: '209764',
      fees: [
        {
          name: 'BASE_DISTANCE',
          fee: 4400,
        },
        {
          name: 'BASE_TIME',
        },
        {
          name: 'ANCILLARY_SURGE_FEE',
        },
      ],
      totalFee: 4400,
    },
    parentId: '274773',
    avgRatingString: '4.3',
    totalRatingsString: '1K+',
    sla: {
      deliveryTime: 27,
      lastMileTravel: 4.9,
      serviceability: 'SERVICEABLE',
      slaString: '27 mins',
      lastMileTravelString: '4.9 km',
      iconType: 'ICON_TYPE_EMPTY',
    },
    availability: {
      nextCloseTime: '2023-10-03 00:00:00',
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: 'guiltfree/GF_Logo_android_3x',
          shortDescription: 'options available',
          fontColor: '#7E808C',
        },
      ],
    },
    isOpen: true,
    type: 'F',
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: '',
                fontColor: '#7E808C',
                iconId: 'guiltfree/GF_Logo_android_3x',
                shortDescription: 'options available',
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: '20% OFF',
      subHeader: 'UPTO ₹50',
    },
    differentiatedUi: {
      displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
      differentiatedUiMediaDetails: {
        mediaType: 'ADS_MEDIA_ENUM_IMAGE',
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: 'https://www.swiggy.com/restaurants/third-wave-coffee-ambalipura-haralur-bangalore-209764',
    type: 'WEBLINK',
  },
};

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg"
        className="logo"
        alt=""
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla } = props?.resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.resData.info.cloudinaryImageId}`}
        alt=""
      />
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p>{cuisines?.slice(0, 3).join(', ')}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo} </p>
      <p>{sla?.deliveryTime} minutes</p>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">Search with Button</div>
      <div className="restaurant-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
