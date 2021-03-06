import SPELLS from 'common/SPELLS';

// from https://www.wowhead.com/spell=137037/assassination-rogue
export const ABILITIES_AFFECTED_BY_DAMAGE_INCREASES = [
  SPELLS.MELEE.id,
  SPELLS.BLINDSIDE_TALENT.id,
  SPELLS.CRIMSON_TEMPEST_TALENT.id,
  SPELLS.ENVENOM.id,
  SPELLS.FAN_OF_KNIVES.id,
  SPELLS.GARROTE.id,
  SPELLS.MUTILATE.id,
  SPELLS.MUTILATE_MAINHAND.id,
  SPELLS.MUTILATE_OFFHAND.id,
  SPELLS.POISON_BOMB.id,
  SPELLS.POISONED_KNIFE.id,
  SPELLS.RUPTURE.id,
  SPELLS.TOXIC_BLADE_TALENT.id,  
  SPELLS.DOUBLE_DOSE.id,
  SPELLS.INTERNAL_BLEEDING_TALENT.id,
  SPELLS.DEADLY_POISON_DOT.id,
  SPELLS.DEADLY_POISON_PROC.id,
  SPELLS.WOUND_POISON.id,
];

// from https://www.wowhead.com/spell=196864/master-poisoner
export const ABILITIES_AFFECTED_BY_POISON_DAMAGE_INCREASES = [
    SPELLS.DEADLY_POISON_DOT.id,
    SPELLS.DEADLY_POISON_PROC.id,
    SPELLS.WOUND_POISON.id,
  ];
