<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PeopleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "name" => $this->name,
            "model" => $this->model,
            "cost_in_credits" => $this->cost_in_credits,
            "length" => $this->length,
            "max_atmosphering_speed" => $this->max_atmosphering_speed,
            "passengers" => $this->passengers,
            "cargo_capacity" => $this->cargo_capacity,
            "consumables" => $this->consumables,
            "hyperdrive_rating" => $this->hyperdrive_rating,
            "MGLT" => $this->MGLT,
            "starship_class" => $this->starship_class,
            "pilots" => $this->pilots,
            "films" => $this->films,
            "url" => $this->url
        ];
    }
}
