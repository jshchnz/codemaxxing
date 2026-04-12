/**
 * ============================================================================
 * ENTERPRISE MYTHOLOGY DATABASE MANAGEMENT SYSTEM
 * ============================================================================
 *
 * Module: Root Index
 * Layer: Application
 * Type: Barrel
 * Description: Entry point for the entire application.
 *
 * This file is part of the extremely complex, highly scalable, and heavily
 * documented enterprise-grade ancient mythology database system.
 * It adheres strictly to the principles of Extreme Clean Architecture,
 * ensuring maximum separation of concerns and robust maintainability.
 *
 * The system is designed to handle immense loads of mythological data,
 * providing interfaces for robust querying, mutation, and aggregation
 * across a vast array of diverse cultural pantheons.
 *
 * Author: Automated Enterprise Generator System (AEGS)
 * Version: 1.0.0
 * Security Classification: PUBLIC
 *
 * WARNING: Modifications to this file should only be performed by certified
 * Enterprise Architects. Any deviation from the established patterns may
 * result in severe architectural degradation and technical debt.
 * ============================================================================
 */
console.log('Enterprise Mythology Database Initialized.');
import { GreekDeityController } from './src/presentation/controllers/GreekDeityController';
import { GreekHeroController } from './src/presentation/controllers/GreekHeroController';
import { GreekCreatureController } from './src/presentation/controllers/GreekCreatureController';
import { GreekArtifactController } from './src/presentation/controllers/GreekArtifactController';
import { GreekMythController } from './src/presentation/controllers/GreekMythController';
import { GreekLocationController } from './src/presentation/controllers/GreekLocationController';
import { GreekEventController } from './src/presentation/controllers/GreekEventController';
import { NorseDeityController } from './src/presentation/controllers/NorseDeityController';
import { NorseHeroController } from './src/presentation/controllers/NorseHeroController';
import { NorseCreatureController } from './src/presentation/controllers/NorseCreatureController';
import { NorseArtifactController } from './src/presentation/controllers/NorseArtifactController';
import { NorseMythController } from './src/presentation/controllers/NorseMythController';
import { NorseLocationController } from './src/presentation/controllers/NorseLocationController';
import { NorseEventController } from './src/presentation/controllers/NorseEventController';
import { EgyptianDeityController } from './src/presentation/controllers/EgyptianDeityController';
import { EgyptianHeroController } from './src/presentation/controllers/EgyptianHeroController';
import { EgyptianCreatureController } from './src/presentation/controllers/EgyptianCreatureController';
import { EgyptianArtifactController } from './src/presentation/controllers/EgyptianArtifactController';
import { EgyptianMythController } from './src/presentation/controllers/EgyptianMythController';
import { EgyptianLocationController } from './src/presentation/controllers/EgyptianLocationController';
import { EgyptianEventController } from './src/presentation/controllers/EgyptianEventController';
import { RomanDeityController } from './src/presentation/controllers/RomanDeityController';
import { RomanHeroController } from './src/presentation/controllers/RomanHeroController';
import { RomanCreatureController } from './src/presentation/controllers/RomanCreatureController';
import { RomanArtifactController } from './src/presentation/controllers/RomanArtifactController';
import { RomanMythController } from './src/presentation/controllers/RomanMythController';
import { RomanLocationController } from './src/presentation/controllers/RomanLocationController';
import { RomanEventController } from './src/presentation/controllers/RomanEventController';
import { AztecDeityController } from './src/presentation/controllers/AztecDeityController';
import { AztecHeroController } from './src/presentation/controllers/AztecHeroController';
import { AztecCreatureController } from './src/presentation/controllers/AztecCreatureController';
import { AztecArtifactController } from './src/presentation/controllers/AztecArtifactController';
import { AztecMythController } from './src/presentation/controllers/AztecMythController';
import { AztecLocationController } from './src/presentation/controllers/AztecLocationController';
import { AztecEventController } from './src/presentation/controllers/AztecEventController';
import { MayanDeityController } from './src/presentation/controllers/MayanDeityController';
import { MayanHeroController } from './src/presentation/controllers/MayanHeroController';
import { MayanCreatureController } from './src/presentation/controllers/MayanCreatureController';
import { MayanArtifactController } from './src/presentation/controllers/MayanArtifactController';
import { MayanMythController } from './src/presentation/controllers/MayanMythController';
import { MayanLocationController } from './src/presentation/controllers/MayanLocationController';
import { MayanEventController } from './src/presentation/controllers/MayanEventController';
import { JapaneseDeityController } from './src/presentation/controllers/JapaneseDeityController';
import { JapaneseHeroController } from './src/presentation/controllers/JapaneseHeroController';
import { JapaneseCreatureController } from './src/presentation/controllers/JapaneseCreatureController';
import { JapaneseArtifactController } from './src/presentation/controllers/JapaneseArtifactController';
import { JapaneseMythController } from './src/presentation/controllers/JapaneseMythController';
import { JapaneseLocationController } from './src/presentation/controllers/JapaneseLocationController';
import { JapaneseEventController } from './src/presentation/controllers/JapaneseEventController';
import { ChineseDeityController } from './src/presentation/controllers/ChineseDeityController';
import { ChineseHeroController } from './src/presentation/controllers/ChineseHeroController';
import { ChineseCreatureController } from './src/presentation/controllers/ChineseCreatureController';
import { ChineseArtifactController } from './src/presentation/controllers/ChineseArtifactController';
import { ChineseMythController } from './src/presentation/controllers/ChineseMythController';
import { ChineseLocationController } from './src/presentation/controllers/ChineseLocationController';
import { ChineseEventController } from './src/presentation/controllers/ChineseEventController';
import { CelticDeityController } from './src/presentation/controllers/CelticDeityController';
import { CelticHeroController } from './src/presentation/controllers/CelticHeroController';
import { CelticCreatureController } from './src/presentation/controllers/CelticCreatureController';
import { CelticArtifactController } from './src/presentation/controllers/CelticArtifactController';
import { CelticMythController } from './src/presentation/controllers/CelticMythController';
import { CelticLocationController } from './src/presentation/controllers/CelticLocationController';
import { CelticEventController } from './src/presentation/controllers/CelticEventController';
import { HinduDeityController } from './src/presentation/controllers/HinduDeityController';
import { HinduHeroController } from './src/presentation/controllers/HinduHeroController';
import { HinduCreatureController } from './src/presentation/controllers/HinduCreatureController';
import { HinduArtifactController } from './src/presentation/controllers/HinduArtifactController';
import { HinduMythController } from './src/presentation/controllers/HinduMythController';
import { HinduLocationController } from './src/presentation/controllers/HinduLocationController';
import { HinduEventController } from './src/presentation/controllers/HinduEventController';
import { SumerianDeityController } from './src/presentation/controllers/SumerianDeityController';
import { SumerianHeroController } from './src/presentation/controllers/SumerianHeroController';
import { SumerianCreatureController } from './src/presentation/controllers/SumerianCreatureController';
import { SumerianArtifactController } from './src/presentation/controllers/SumerianArtifactController';
import { SumerianMythController } from './src/presentation/controllers/SumerianMythController';
import { SumerianLocationController } from './src/presentation/controllers/SumerianLocationController';
import { SumerianEventController } from './src/presentation/controllers/SumerianEventController';
import { IncaDeityController } from './src/presentation/controllers/IncaDeityController';
import { IncaHeroController } from './src/presentation/controllers/IncaHeroController';
import { IncaCreatureController } from './src/presentation/controllers/IncaCreatureController';
import { IncaArtifactController } from './src/presentation/controllers/IncaArtifactController';
import { IncaMythController } from './src/presentation/controllers/IncaMythController';
import { IncaLocationController } from './src/presentation/controllers/IncaLocationController';
import { IncaEventController } from './src/presentation/controllers/IncaEventController';
import { YorubaDeityController } from './src/presentation/controllers/YorubaDeityController';
import { YorubaHeroController } from './src/presentation/controllers/YorubaHeroController';
import { YorubaCreatureController } from './src/presentation/controllers/YorubaCreatureController';
import { YorubaArtifactController } from './src/presentation/controllers/YorubaArtifactController';
import { YorubaMythController } from './src/presentation/controllers/YorubaMythController';
import { YorubaLocationController } from './src/presentation/controllers/YorubaLocationController';
import { YorubaEventController } from './src/presentation/controllers/YorubaEventController';
import { SlavicDeityController } from './src/presentation/controllers/SlavicDeityController';
import { SlavicHeroController } from './src/presentation/controllers/SlavicHeroController';
import { SlavicCreatureController } from './src/presentation/controllers/SlavicCreatureController';
import { SlavicArtifactController } from './src/presentation/controllers/SlavicArtifactController';
import { SlavicMythController } from './src/presentation/controllers/SlavicMythController';
import { SlavicLocationController } from './src/presentation/controllers/SlavicLocationController';
import { SlavicEventController } from './src/presentation/controllers/SlavicEventController';
import { MaoriDeityController } from './src/presentation/controllers/MaoriDeityController';
import { MaoriHeroController } from './src/presentation/controllers/MaoriHeroController';
import { MaoriCreatureController } from './src/presentation/controllers/MaoriCreatureController';
import { MaoriArtifactController } from './src/presentation/controllers/MaoriArtifactController';
import { MaoriMythController } from './src/presentation/controllers/MaoriMythController';
import { MaoriLocationController } from './src/presentation/controllers/MaoriLocationController';
import { MaoriEventController } from './src/presentation/controllers/MaoriEventController';
